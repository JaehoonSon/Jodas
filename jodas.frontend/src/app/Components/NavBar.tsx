const NavBar = () => {
  return (
    <div className="navbar bg-main h-1/10">
      <div className="flex-1 flex justify-start items-center">
        <img src="/logo.png" alt="logo" className="w-28 h-28"/>
        <a className="btn btn-ghost text-2xl">CapSoul</a>
      </div>
      <div className="w-1/2 h-full">
        <ul className="menu menu-horizontal px-1 flex flex-1 font-bold text-2xl h-full gap-20 justify-evenly">
          <li><a>About</a></li>
          <li><a>Get Started</a></li>
          <li><a>Login</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
