const Main = () => {
  return (
    <div className="h-full flex justify-between items-center">
        <div className="h-full w-full flex justify-center items-center">
            <div className="text-7xl">
                Beyond Memory.
            </div>
        </div>
        <video src="/rocket.mp4" muted autoPlay loop playsInline className="w-1/2 h-full object-cover"></video>
    </div>
  );
}

export default Main;