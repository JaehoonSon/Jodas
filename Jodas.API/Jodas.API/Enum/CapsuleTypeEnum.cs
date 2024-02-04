using System;
using System.Runtime.Serialization;

namespace Jodas.API.Enum;

public enum CapsuleTypeEnum
{
    [EnumMember(Value = "Letter")]
    Letter,
    [EnumMember(Value = "Image")]
    Image,
    [EnumMember(Value = "Sound")]
    Sound
}