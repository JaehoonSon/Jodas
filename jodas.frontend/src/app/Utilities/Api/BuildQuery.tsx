import { API_URL } from "../../Config";

const BuildQuery = (type : string, dict : {[name:string]:string}) =>
{
    let stringBuild = "?";
    for (var key in dict)
    {
        if (stringBuild.length != 1)
            stringBuild += "&"
        stringBuild += key + "=" + dict[key]
    }
    return encodeURI(API_URL + type + stringBuild);
};

export default BuildQuery;