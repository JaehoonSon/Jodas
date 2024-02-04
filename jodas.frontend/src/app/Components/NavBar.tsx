import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar bg-main h-24 border-solid border-b white">
      <div className="flex-1 flex justify-start items-center">
        <img src="/logo.png" alt="logo" className="w-28 h-28" />
        <span className="btn btn-ghost text-2xl">CapSoul</span>
      </div>
      <div className="h-full">
        <ul className="menu menu-horizontal px-1 flex flex-1 font-bold text-2xl h-full gap-20 justify-evenly">
          <li>
            <Link href={"/about"}>About</Link>
          </li>

          <li>
            <Link href={"/register"}>Get Started</Link>
          </li>
          <li>
            <Link href={"/LoginPage"}>Login</Link>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
