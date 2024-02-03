using System;

using Jodas.API.Models;
using Jodas.API.Models.Body;

namespace Jodas.API.Services;

public interface IHandleEventRequest
{
    Task<CapsuleEvent> CreateCapsuleAsync(CapsuleCreateBody capsuleCreateBody);
}

