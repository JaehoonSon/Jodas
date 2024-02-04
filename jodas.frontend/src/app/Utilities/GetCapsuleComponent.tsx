import { JSX } from "react";
import GetCapsuleAPI from "./Api/GetCaspuleAPI";
import TimelineButton from "../Components/TimelineButton";

const GetCapsuleComponent = async () =>
{
    var data = GetCapsuleAPI("aaron@gmail.com");

    var capsules: JSX.Element[] = [];
    data.then(e => {
    })
    
    return data
};

export default GetCapsuleComponent;