const LetterCard = (Capsule:any) => {
    var capsule = Capsule["capsule"];
    var postDate = new Date(capsule.PostDate);
    var releaseDate = new Date(capsule.ReleaseDate);

    // Format the date
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
    return (
        <>
            <div className="md:p-8 p-2 bg-white flex flex-col shadow-2xl rounded">
                <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">{capsule.Location}</h1>
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
        </>
    );
  };

  export default LetterCard;