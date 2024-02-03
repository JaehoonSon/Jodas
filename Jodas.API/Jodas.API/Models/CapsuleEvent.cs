using System;
using MongoDB;
using MongoDB.Bson.Serialization.Attributes;
using Jodas.API.Enum;

namespace Jodas.API.Models;

public class CapsuleEvent
{
    public Guid Id { get; set; }
    public EventTypeEnum EventType { get; set; }
    public DateTime PostDate { get; set; }
    public DateTime ReleaseDate { get; set; }
    [BsonElement("location")]
    public string? Location { get; set; }
}

