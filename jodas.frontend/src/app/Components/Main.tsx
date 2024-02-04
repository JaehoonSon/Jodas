"use client";

import { useRouter } from "next/navigation";

const Main = () => {
  const router = useRouter();

  return (
    <div className="h-full flex justify-between items-center">
      <div className="h-full w-full flex flex-col justify-center items-center gap-10 m-10">
        <div className="text-8xl font-bold">
          <span className="type-landing"></span>
        </div>
        <div className="text-4xl">
            Go back and forth through TIME with CapSoul!
        </div>

        <button
          className="btn btn-primary px-32 btn-lg"
          onClick={() => router.push("/register")}
        >
          Register
        </button>
      </div>
      <video
        src="/rocket.mp4"
        muted
        autoPlay
        loop
        playsInline
        className="w-1/2 h-full object-cover"
      ></video>
    </div>
  );
};

export default Main;
