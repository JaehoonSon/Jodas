import { API_URL } from "../../Config";
import BuildQuery from "./BuildQuery";

const GetCapsuleAPI = async (user: string) =>
{
    const query = {
        "Email": user,
    };
    const URL = BuildQuery("GetUserEvents", query);
    var result = fetch(URL).then(res => res.json())
    return result;
};

export default GetCapsuleAPI;