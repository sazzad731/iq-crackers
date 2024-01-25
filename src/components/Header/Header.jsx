import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Header = () =>
{
  const [ active, setActive ] = useState(false)
  const headerLink = [
    { id: 1, name: "Topics", path: "/" },
    { id: 2, name: "Statistics", path: "/staitistics" },
    { id: 3, name: "Blog", path: "/blog" },
  ];
  return (
    <header className="w-full px-2 mb-20 top-0 shadow-xl shadow-indigo-100">
      <nav className="flex items-center justify-between w-full max-w-7xl mx-auto py-4">
        {/* logo section */}
        <div>
          <span className="text-3xl text-indigo-600 font-bold">
            IQ Crackers
          </span>
        </div>

        {/* nav link */}
        <div className={`flex flex-col gap-6 md:flex-row items-center justify-between md:static absolute right-0 ${active?"top-20":"top-[-300px]"} md:p-0 py-10 px-20 md:bg-opacity-0 bg-indigo-600 md:text-indigo-400 text-white font-bold text-xl md:rounded-none rounded-lg z-50`}>
          {
            headerLink.map(link => <NavLink className={({isActive})=>isActive &&"md:text-indigo-600"} to={link.path} key={link.id}>{link.name}</NavLink>)
          }
        </div>
        <div onClick={() => setActive(!active)} className="md:hidden h-7 w-7 text-indigo-600">
          {active ? <XMarkIcon/> : <Bars3Icon/>}
        </div>
      </nav>
    </header>
  );
};

export default Header;