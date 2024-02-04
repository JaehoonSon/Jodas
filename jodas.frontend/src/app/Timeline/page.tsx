"use client"
import {TimelineButton} from "../Components/Master"
import GetCapsuleComponent from "../Utilities/GetCapsuleComponent";
import React, {useEffect, useState} from "react"

const page = () =>
{
    const [capsules, setComponent] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const dap = await GetCapsuleComponent();
            setComponent(dap);
        }
        fetchData();
    }, [])

    const test = () => capsules.map(e => console.log(e))

    return (
    <>
        <div className={`
            bg-gradient-to-r from-cyan-500 to-blue-500
            h-3 w-full rounded-2xl flex justify-evenly
            `}>
            {
                capsules.map(e => <TimelineButton Capsule={e}></TimelineButton>)
            }
        </div>
        <button onClick={() => GetCapsuleComponent()}>
            Button
        </button>
        <button onClick={test}>Button1</button>
    </>
    )
}

export default page;