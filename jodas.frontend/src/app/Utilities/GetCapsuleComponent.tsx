import { JSX } from "react";
import GetCapsuleAPI from "./Api/GetCaspuleAPI";
import TimelineButton from "../Components/TimelineButton";

const GetCapsuleComponent = () =>
{
    var data = GetCapsuleAPI("aaron@gmail.com");

    var capsules: JSX.Element[] = [];
    data.then(e => {
        for (var item in e)
            capsules.push(<TimelineButton Capsule={e[item]}></TimelineButton>)
    })
    console.log(capsules);
    return capsules
};

export default GetCapsuleComponent;