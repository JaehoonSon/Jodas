import ImageCard from "./ImageCard";
import LetterCard from "./LetterCard";
import IC from "../../Assets/IC.jpeg"
import Astana from "../../Assets/Astana.webp"
import Utokyo from "../../Assets/Utokyo.jpeg"
import Saipan from "../../Assets/Saipan.webp"

const tempo = {
  CapsuleType: "Image",
  CapsuleImage: IC,

}

const Card = (Capsule:any) => {
    var capsule = Capsule["Capsule"];
    if (capsule.CapsuleType === "Image") {
      capsule.ContentImage = Astana;
      console.log(capsule)
      if (capsule.Location.includes("Astana"))
        capsule.ContentImage = Astana;
      else if (capsule.Location.includes("Tokyo"))
        capsule.ContentImage = Utokyo;
      else if (capsule.Location.includes("Saipan"))
        capsule.ContentImage = Saipan;
      else if (capsule.Location.includes("Swarthmore"))
        capsule.ContentImage = IC;
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