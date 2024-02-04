using System;
namespace Jodas.API.Services;

public interface IHandleImage
{
    Task<byte[]> GetImage(int index);
}

