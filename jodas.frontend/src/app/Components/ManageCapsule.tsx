import Letter from "./Letter";
import Upload from "./Upload";

const ManageCapsule = () => {
  return (
    <>
      <div className={"flex justify-center space-x-3"}>
        <Letter />
        <Upload />
      </div>
    </>
  );
};

export default ManageCapsule;
