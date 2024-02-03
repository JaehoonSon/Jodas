using System;
using System.Security.Cryptography;

using Jodas.API.Models;
using Jodas.API.Models.Body;

namespace Jodas.API.Services;

public class HandleUserRequest: IHandleUserRequest
{
	public HandleUserRequest()
	{
	}

	public async Task<User> CreateUserAsync(UserBody userBody)
	{
        var user = new User()
        {
            Name = userBody.Name,
            Email = userBody.Email,
            AccountCreationDate = userBody.CreateDate,
            HashPassword = QuickHash(userBody.Password)
        };

        return user;
    }

    private byte[] QuickHash(string inp)
        => SHA256.Create().ComputeHash(System.Text.Encoding.UTF8.GetBytes(inp));


}

