import Dropdown from "../components/Dropdown";

function Header() {
  return (
    <header className=" bg-indigo-950 border-b border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className="flex"></div>
          <div className="flex">
            <hr className="w-px h-12 bg-slate-200 mx-3" />
            <Dropdown />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
