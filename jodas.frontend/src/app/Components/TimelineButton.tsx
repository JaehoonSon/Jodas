/*
 capsuleType
 contentImage
 contentLetter
 location
 postDate
 releaseDate
*/

const TimelineButton = (Capsule:any) =>
{
    var capsule = Capsule["Capsule"];
    return (
        <>
            <div className={"rounded-full bg-red-500 h-6 w-6 hover:bg-blue-500"}>
                dsad
                {capsule.capsuleType}
                <div className={"bg-slate-400 h-10 w-10"}>
                    <h1>{capsule.capsuleType}</h1>
                    <p>{capsule.contentLetter}</p>
                    <p>At{" "}{capsule.postDate}</p>
                </div>
            </div>
        </>
    )
};

export default TimelineButton;