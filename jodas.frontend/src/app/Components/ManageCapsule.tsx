"use client";

import { useState } from "react";
import Tiptap from "./TipTap";
import Upload from "./Upload";
// Import necessary modules

const ManageCapsule = () => {
  const [type, setType] = useState<"file" | "text">("text");
  const [files, setFiles] = useState<File[]>([]);
  const [data, setData] = useState({
    contact1: "",
    contact2: "",
    date: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);

      if (type === "file") {
        if (files.length > 0) {
          files.forEach((file) => {
            formData.append("files", file);
          });
        } else {
          alert("Please upload a file");
          return;
        }
      } else {
        const textContent = localStorage.getItem("content") || ""; // Provide a default value if localStorage.getItem("content") is null
        formData.append("text", textContent);
      }

      console.log("Form data:", formData.get("text"));

      const apiUrl = "https://api.example.com/upload";
      const response = await fetch(apiUrl, { method: "POST", body: formData });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    console.log("Form submitted!");
  };

  return (
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
          <label htmlFor="date">Open date</label>

          <input
            type="text"
            name="contact1"
            id="contact1"
            placeholder="Contact 1"
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
          <label htmlFor="date">Open date</label>
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
            className="bg-blue-400 py-2 mt-4 rounded text-white font-bold hover:bg-blue-300"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageCapsule;
