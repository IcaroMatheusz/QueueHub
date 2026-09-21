import DropDownMenu from "./DropDownMenu";
import ProfileDropDown from "./ProfileDropDown";

function Header() {
  return (
    <div className="navbar bg-base-200 border-b border-base-300 shadow-sm">
      <div className="navbar-start">
        <DropDownMenu />
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl font-bold">
          <span className="font-mono">Queue</span>
          <span className="text-primary font-mono">Hub</span>
        </a>
      </div>

      <div className="navbar-end">
        <ProfileDropDown />
      </div>
    </div>
  );
}

export default Header;
