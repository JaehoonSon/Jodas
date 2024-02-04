"use client";

import { useState } from "react";
import Tiptap from "./TipTap";
import Upload from "./Upload";
// Import necessary modules

const ManageCapsule = () => {
  const [type, setType] = useState<"file" | "text">("text");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add logic for handling the form submission
    console.log("Form submitted!");
    // You can add additional logic here, such as sending data to the server.

    // For example:
    // const formData = new FormData(e.currentTarget);
    // fetch('/your-api-endpoint', {
    //   method: 'POST',
    //   body: formData,
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
  };

  return (
    <div className="flex my-4 w-full text-white gap-28 justify-evenly px-40">
      <div className="flex-wrap flex-shrink-0 grow">
        <form onSubmit={handleSubmit}>
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

          {type === "file" ? <Upload className="" /> : <Tiptap />}
        </form>
      </div>

      <div
        className="flex flex-col gap-2 border p-4 rounded-xl "
        style={{ alignSelf: "flex-start" }}
      >
        <h1 className="text-xl font-bold">Send to space</h1>
        <hr />
        <label htmlFor="date">Open date</label>

        <input
          type="text"
          name=""
          id=""
          placeholder="Contact 1"
          required
          className="p-2 w-72 rounded text-black"
        />
        <label htmlFor="date">Contact 2</label>
        <input
          type="text"
          name=""
          id=""
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
    </div>
  );
};

export default ManageCapsule;
