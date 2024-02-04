import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar bg-main h-24 border-solid border-b white">
      <div className="flex-1 flex justify-start items-center">
        <Link href={"/"} className="flex">
          <img src="/logo.png" alt="logo" className="w-28 h-28" />
          <span className="text-2xl font-bold my-auto">CapSoul</span>
        </Link>
      </div>

      <div className="">
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
