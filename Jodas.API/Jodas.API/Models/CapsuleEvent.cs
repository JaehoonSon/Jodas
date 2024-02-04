using System;
using MongoDB;
using MongoDB.Bson.Serialization.Attributes;
using Jodas.API.Enum;
using MongoDB.Bson;

namespace Jodas.API.Models;

public class CapsuleEvent
{

    [BsonId]
    public ObjectId Id { get; set; }

    [BsonElement("capsule_type")]
    public CapsuleTypeEnum CapsuleType { get; set; }

    [BsonElement("post_date")]
    [BsonDateTimeOptions(Kind = DateTimeKind.Utc)]
    public DateTime PostDate { get; set; }

    [BsonElement("release_date")]
    [BsonDateTimeOptions(Kind = DateTimeKind.Utc)]
    public DateTime ReleaseDate { get; set; }

    [BsonElement("location")]
    public string? Location { get; set; }

    [BsonElement("content_image")]
    public byte[]? ContentImage { get; set; }

    [BsonElement("content_letter")]
    public string? ContentLetter { get; set; }
}

