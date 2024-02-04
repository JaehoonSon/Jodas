using System;
using Jodas.API.Models;
using Jodas.API.Models.Query;
using Jodas.API.Models.Body;
using Jodas.API.Services;

using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace Jodas.API.Controllers;

[ApiController]
[Route("api")]
public class CapsuleController: ControllerBase
{
	private readonly IMongoClient _mongoClient;
	private readonly IMongoCollection<CapsuleEvent> _capsuleCollection;
	private readonly IMongoCollection<User> _userCollection;
	private readonly IHandleUserRequest _handleUserRequest;
	private readonly IHandleEventRequest _handleEventRequest;
    public CapsuleController(IMongoClient mongoClient, IHandleUserRequest handleUserRequest, IHandleEventRequest handleEventRequest)
	{
		_mongoClient = mongoClient;
		var database = mongoClient.GetDatabase("JodasOnly");

        _capsuleCollection = database.GetCollection<CapsuleEvent>("Capsule");
		_userCollection = database.GetCollection<User>("Users");
		_handleUserRequest = handleUserRequest;
		_handleEventRequest = handleEventRequest;
	}

	[HttpGet("GetEvents")]
	public async Task<IActionResult> GetEvents([FromQuery] CapsuleQuery capsuleQuery)
	{
		var user = await _userCollection.Find(u => u.Email == capsuleQuery.Email).Limit(1).SingleAsync();
		if (user is null)
			return BadRequest("User not found");

		//var capsuleEvents = _capsuleCollection.Find(e => e.Id == )
		return BadRequest();
		//return await capsuleEvents.ToListAsync();
	}

	[HttpGet("GetUserEvents")]
	public async Task<IActionResult> GetUserEvents([FromQuery] UserQuery userQuery)
	{
		var user = await _userCollection.Find(user => user.Email == userQuery.Email).Limit(1).SingleAsync();
		var results = _capsuleCollection.AsQueryable().Where(capsule => user.Events.Contains(capsule.Id)).ToList();
		//_capsuleCollection.
		return Ok(results);
	}

	[HttpPost("CreateUsers")]
	public async Task<IActionResult> CreateUsers([FromBody] UserBody userBody)
	{
		if (userBody is null)
			return BadRequest("User is null");
		User user = await _handleUserRequest.CreateUserAsync(userBody);
		await _userCollection.InsertOneAsync(user);
		return Ok(user);
	}

	[HttpPost("CreateEvents")]
	public async Task<IActionResult> CreateEvents([FromQuery] CapsuleCreateBody capsuleCreateBody)
	{
		if (capsuleCreateBody is null)
			return BadRequest("Capsule is null");
		CapsuleEvent capsuleEvent = await _handleEventRequest.CreateCapsuleAsync(capsuleCreateBody);

		var user = await _userCollection.Find(e => e.Email == capsuleCreateBody.Email).Limit(1).SingleAsync();
		if (user is null)
			return BadRequest("User not found");

		// Added capsule
		await _capsuleCollection.InsertOneAsync(capsuleEvent);

        // Linked user to capsule
        var userFilter = Builders<User>.Filter.Eq(u => u.Email, capsuleCreateBody.Email);
		var update = Builders<User>.Update.AddToSet(u => u.Events, capsuleEvent.Id);
        UpdateResult updateResult = await _userCollection.UpdateOneAsync(userFilter, update);

        //if (!updateResult.IsAcknowledged || updateResult.ModifiedCount == 0)
        //	return BadRequest("Couldn't add");

        //      return Ok();
        if (updateResult.IsAcknowledged && updateResult.ModifiedCount > 0)
        {
			// Update was successful
			return Ok(capsuleEvent);
        }
        else
        {
			// Update failed or didn't modify any document
			return BadRequest("Update failed");
        }
    }
}

