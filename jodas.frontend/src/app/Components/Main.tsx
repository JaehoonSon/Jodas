const Main = () => {
  return (
    <div className="h-full flex justify-between items-center">
      <div className="h-full w-full flex flex-col justify-center items-center gap-10 m-10">
        <div className="text-6xl">
          <span className="type-landing"></span>
        </div>
        <div className="text-4xl">
            Go back and forth through TIME with CapSoul!
        </div>

        <button className="btn btn-primary w-1/2 btn-lg">Register</button>
      </div>
      <video
        src="/rocket.mp4"
        muted
        autoPlay
        loop
        playsInline
        className="w-1/2 h-full object-cover"
      ></video>
    </div>
  );
};

export default Main;
