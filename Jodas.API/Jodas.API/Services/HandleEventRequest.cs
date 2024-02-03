using System;

using Jodas.API.Models;
using Jodas.API.Models.Body;

namespace Jodas.API.Services;

public class HandleEventRequest: IHandleEventRequest
{
	public HandleEventRequest()
	{
	}
	public async Task<CapsuleEvent> CreateCapsuleAsync(CapsuleCreateBody capsuleCreateBody)
	{
		var capsuleEvent = new CapsuleEvent()
		{
			CapsuleType = capsuleCreateBody.CapsuleType,
			PostDate = capsuleCreateBody.PostDate,
			ReleaseDate = capsuleCreateBody.ReleaseDate,
			Location = capsuleCreateBody.Location,
			ContentImage = capsuleCreateBody.ContentImage,
			ContentLetter = capsuleCreateBody.ContentLetter
		};

		return capsuleEvent;
	}
}

