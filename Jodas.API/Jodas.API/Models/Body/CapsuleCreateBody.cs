using System;
using Jodas.API.Enum;

namespace Jodas.API.Models.Body;

public class CapsuleCreateBody
{
    public string? Email { get; set; }
    public CapsuleTypeEnum CapsuleType { get; set; }
    public DateTime PostDate { get; set; } = DateTime.UtcNow;
    public DateTime ReleaseDate { get; set; }
    public string? Location { get; set; }
    public byte[]? ContentImage { get; set; }
    public string? ContentLetter { get; set; }
}

