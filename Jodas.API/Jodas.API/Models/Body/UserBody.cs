using System;
namespace Jodas.API.Models.Body;

public class UserBody
{
    public string? Name { get; set; }
    public string? Password { get; set; }
    public string? Email { get; set; }
    public DateTime CreateDate { get; set; } = DateTime.UtcNow;
}

