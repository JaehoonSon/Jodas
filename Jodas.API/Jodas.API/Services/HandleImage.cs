using System;
using System.Reflection;

namespace Jodas.API.Services;

public class HandleImage:IHandleImage
{
    private readonly string _pictureFolderPath;
    public HandleImage()
    {
        _pictureFolderPath = Path.GetDirectoryName(Assembly.GetEntryAssembly().Location);
    }

    public async Task<byte[]> GetImage(int index)
    {
        string[] files = Directory.GetFiles(_pictureFolderPath);
        if (files.Length >= index)
        {
            return new byte[0];
        }
        var picturePath = Path.Combine(_pictureFolderPath, files[index]);
        return await File.ReadAllBytesAsync(picturePath);
    }
}

