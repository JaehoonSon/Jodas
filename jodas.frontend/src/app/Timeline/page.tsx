"use client";
import { TimelineButton } from "../Components/Master";
import GetCapsuleComponent from "../Utilities/GetCapsuleComponent";
import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const page = () => {
  // const [capsules, setComponent] = useState<JSX.Element[]>([]);
  const [capsules, setComponent] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      let something = [
        { capsuleType: "hello", postDate: "hdhd", contentLetter: "hej" },
      ];
      const dap = await GetCapsuleComponent();
      setComponent(dap);
      // setComponent(dap);
    };
    fetchData();
  }, []);



  return (
    <>
    <div className="text-4xl p-5 flex justify-center items-center">Welcome to your CapSoul</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5">
        {capsules.map((e, index) => (
            <div key={index} className="grid gap-4">
                <Card Capsule={e} />
            </div>
        ))}
        </div>
    </>
  );
};

export default page;
