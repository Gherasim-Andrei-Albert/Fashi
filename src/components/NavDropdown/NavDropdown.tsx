import React, { useState } from 'react';
import './NavDropdown.scss';

type NavDropdownProps = {
  title: string;
  children: any;
};

const NavDropdown: React.FC<NavDropdownProps> = (props) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  var dropdownMenuRef = React.createRef<HTMLDivElement>();
  var [isFirstTime, setIsFirstTime] = React.useState(true);
  var [initialHeight, setInitialHeight] = React.useState(0);
  React.useEffect(() => {
    if (isFirstTime)
      if (dropdownMenuRef != null) {
        var dropdownMenu = dropdownMenuRef.current;
        if (dropdownMenu != null) {
          setInitialHeight(dropdownMenu.scrollHeight);
          dropdownMenu.style.height = '0';
          dropdownMenu.style.transition = '.3s height';
          setIsFirstTime(false);
        }
      }
  }, [isFirstTime, dropdownMenuRef]);
  return (
    <div className={`navDropdown${isMenuVisible ? '--show' : ''}`}>
      <button
        className="navDropdown__toggle"
        onClick={() => {
          setIsMenuVisible((visible) => !visible);
          if (dropdownMenuRef != null) {
            var dropdownMenu = dropdownMenuRef.current;
            if (dropdownMenu != null) {
              if (!isMenuVisible) {
                dropdownMenu.style.height = `${initialHeight}px`;
              } else {
                dropdownMenu.style.height = '0';
              }
            }
          }
        }}
      >
        {props.title}
      </button>
      <div className="navDropdown__menu" ref={dropdownMenuRef}>
        {props.children}
      </div>
    </div>
  );
};
export default NavDropdown;
