using System;
using Jodas.API.Models;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace Jodas.API.Controllers;

[ApiController]
[Route("api")]
public class CapsuleController: ControllerBase
{
	private readonly IMongoCollection<CapsuleEvent> _capsuleCollection;
	private readonly IMongoClient _mongoClient;
	public CapsuleController(IMongoClient mongoClient)
	{
		_mongoClient = mongoClient;
		_capsuleCollection = mongoClient.GetDatabase("JodasOnly").GetCollection<CapsuleEvent>("Capsule");
	}

	[HttpGet("Halal")]
	public async Task<ActionResult> Halal()
	{
		var stuff = _capsuleCollection.AsQueryable().Select(e => e.Location).ToList();

		return Ok("Dsad");
	}
}

