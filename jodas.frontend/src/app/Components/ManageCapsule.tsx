"use client";

import Letter from "./Letter";
import Tiptap from "./TipTap";
import Upload from "./Upload";

const ManageCapsule = () => {
  return (
    <>
      <div className={"flex gap-2 my-8"}>
        <Letter />
        <Upload />
      </div>

      <Tiptap />
      {/* Submit */}
      <div>
        <button className="btn btn-primary my-8">Submit</button>
      </div>
    </>
  );
};

export default ManageCapsule;
