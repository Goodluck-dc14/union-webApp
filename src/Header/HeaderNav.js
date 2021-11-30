import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar/SideBar";

function HeaderNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
    </div>
  );
}

export default HeaderNav;
