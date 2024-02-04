"use client";

import { useState } from "react";
import Tiptap from "./TipTap";
import Upload from "./Upload";
import { API_URL } from "../Config";
import {useRouter} from "next/navigation";


// Import necessary modules

const ManageCapsule = () => {

  const router = useRouter()
  const [type, setType] = useState<"file" | "text">("text");
  const [files, setFiles] = useState<File[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [video, setVideo] = useState<any>(<video
    src="/rocketFly.mp4"
    muted
    autoPlay
    playsInline
    className="absolute right-0 top-0 w-full self-stretch object-fit"
  >
  </video>);

  const handleAnimation = () => {

    setShow(true);
    setTimeout(() => {
      router.push("/Timeline");
    }, 10000);
    // setShow(false);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log(files);

    let data: any = {};

    try {
      const formData = new FormData(e.currentTarget);

      for (let [key, value] of formData.entries() as any) {
        data[key] = value;
      }

      if (type === "file") {
        if (files.length > 0) {
          files.forEach((file) => {
            data["files"] = files.map((file) => file);
            // write the files into data object
          });
        } else {
          alert("Please upload a file");
          return;
        }
      } else {
        const textContent = localStorage.getItem("content") || "";
        data["text"] = textContent;
      }

      data["capsuleType"] = type;
      data["createDate"] = new Date().toISOString();

      console.log(data["files"]);

      // formData.append("capsuleType", type);
      // formData.append("createDate", new Date().toISOString());

      const apiUrl = API_URL + "CreateCapsule";
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(data),
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    handleAnimation();
    console.log("Form submitted!");
  };

  return (
    <>
    <div className="flex my-4 w-full text-white gap-28 justify-evenly px-40">
      <div className="flex-wrap flex-shrink-0 grow">
        <div className="flex gap-2 mb-4">
          <button
            className="py-2 px-4 bg-blue-600 rounded hover:bg-blue-800"
            onClick={() => setType("file")}
          >
            Upload
          </button>
          <button
            className="py-2 px-4 bg-blue-600 rounded hover:bg-blue-800"
            onClick={() => setType("text")}
          >
            Letter
          </button>
        </div>
        <hr className="w-full mb-4" />

        {type === "file" ? (
          <Upload files={files} setFiles={setFiles} />
        ) : (
          <Tiptap />
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div
          className="flex flex-col gap-2 border p-4 rounded-xl "
          style={{ alignSelf: "flex-start" }}
        >
          <h1 className="text-xl font-bold">Send to space</h1>
          <hr />
          <label htmlFor="email">Email</label>

          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="p-2 w-72 rounded text-black"
          />
          <label htmlFor="date">Contact 2</label>
          <input
            type="text"
            name="contact2"
            id="contact2"
            placeholder="Contact 2"
            required
            className="p-2 w-72 rounded text-black"
          />
          <label htmlFor="date">Release Date</label>
          <input
            type="date"
            name="date"
            id="date"
            required
            className="p-2 w-72 rounded text-black"
          />
          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-700 py-2 mt-4 rounded text-white font-bold hover:bg-blue-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>

{ show &&
    video
}
    </>
  );

};

export default ManageCapsule;
