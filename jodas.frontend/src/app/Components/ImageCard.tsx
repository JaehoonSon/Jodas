import {useState} from "react"
const ImageCard = (Capsule:any) => {
  const [isOpen, setOpen] = useState(false);
  var capsule = Capsule["Capsule"];
    console.log(capsule.ContentImage)
    var postDate = new Date(capsule.PostDate);
    var releaseDate = new Date(capsule.ReleaseDate);
    var formattedPostDate = postDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  });
  var formattedReleaseDate = releaseDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  });
  const handleClick = () => {
    // console.log("fucker")
    setOpen(!isOpen);
  }
  const handleClose = () => {
    setOpen(false);
  }
    return (
      <>
      <div className="md:p-8 p-2 bg-[#f0e2bb] flex flex-col shadow-2xl rounded">
            <div>
            <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">{capsule.Location}</h1>

              <img className="h-auto max-w-full rounded-lg" src={capsule.ContentImage.src} alt="image" onClick={handleClick} />
            </div>
                <div className="max-w-full flex-1">
                    <p className="text-base font-medium tracking-wide text-gray-600 mt-1">{capsule.ContentLetter}</p>
                </div>
                <div className="flex items-center space-x-2 mt-20">
                    <div>
                        <p className="text-gray-500 font-semibold">PostDate: {formattedPostDate}</p>
                        <p className="text-gray-500 font-semibold text-sm">ReleaseDate: {formattedReleaseDate}</p>
                    </div>
                </div>
            </div>
            {
              isOpen &&
              <div className={"flex flex-col fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"}>
                <button className={"self-end h-4 w-8 bg-red-500 rounded-2xl"} onClick={handleClose}></button>
                <img className={"w-[50%]"} src={capsule.ContentImage.src}></img>
              </div>
            }
      </>
    );
  };

  export default ImageCard;