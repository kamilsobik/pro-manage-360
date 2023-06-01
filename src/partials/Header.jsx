import Dropdown from "../components/Dropdown";
import Logo from "../images/logo.svg";

function Header() {
  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className="flex">
            <img
              className="w-8 h-8 rounded-full"
              src={Logo}
              width="32"
              height="32"
              alt="Logo"
            />
          </div>
          <div className="flex">
            <hr className="w-px h-6 bg-slate-200 mx-3" />
            <Dropdown />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
