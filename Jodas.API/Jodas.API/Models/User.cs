using System;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Jodas.API.Models;

public class User
{
    [BsonId]
    public ObjectId Id { get; set; }
    [BsonElement("name")]
    public string? Name { get; set; }
    [BsonElement("email")]
    public string? Email { get; set; }
    [BsonElement("account_creation_date")]
    public DateTime AccountCreationDate { get; set; }
    [BsonElement("hash_password")]
    public byte[]? HashPassword { get; set; }
    [BsonElement("pfp")]
    public byte[]? PFP { get; set; }
    [BsonElement("events")]
    public List<ObjectId> Events { get; set; } = new List<ObjectId>();
}

