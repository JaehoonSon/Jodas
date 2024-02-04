using System;
using MongoDB;
using MongoDB.Bson.Serialization.Attributes;
using Jodas.API.Enum;

namespace Jodas.API.Models;

public class CapsuleEvent
{
    public Guid Id { get; set; }
    public CapsuleTypeEnum CapsuleType { get; set; }
    public DateTime PostDate { get; set; }
    public DateTime ReleaseDate { get; set; }
    [BsonElement("location")]
    public string? Location { get; set; }
    public byte[]? ContentImage { get; set; }
    public string? ContentLetter { get; set; }
}

