const ImageCard = (Capsule:any) => {
    var capsule = Capsule["Capsule"];
    return (
      <div>
        <img className="h-auto max-w-full rounded-lg" src={capsule.ContentImage} alt="image" />
      </div>
    );
  };

  export default ImageCard;