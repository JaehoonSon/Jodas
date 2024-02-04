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
    console.log(capsule)
    return (

        <>
        <h1>jhdhdhhdh</h1>
            <div className={"rounded-full bg-red-500 h-6 w-6 hover:bg-blue-500"}>

                {/* {capsule.capsuleType} */}
                <div className={"bg-slate-400 h-10 w-10"}>
                    <h1>hello</h1>
                    <h1>{capsule.capsuleType}</h1>
                    <p>{capsule.contentLetter}</p>
                    <p>At{" "}{capsule.postDate}</p>
                </div>
            </div>
        </>
    )
};

export default TimelineButton;