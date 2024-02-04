import ImageCard from "./ImageCard";
import LetterCard from "./LetterCard";

const Card = (Capsule:any) => {
    var capsule = Capsule["Capsule"];
    if (capsule.CapsuleType === "Image") {
      return <ImageCard Capsule={capsule} />;
    }
    else if (capsule.CapsuleType === "Letter") {
      return <LetterCard capsule={capsule} />;
    }
    else {
      console.log("Error");
    }
  };

  export default Card;