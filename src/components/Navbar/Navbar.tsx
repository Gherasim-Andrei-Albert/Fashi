import React from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from '../NavDropdown/NavDropdown';
import './Navbar.scss';

type ScreenWidth = {
  current: number;
  old: number | null;
};

const Navbar: React.FC = () => {
  var navbarMenuRef = React.createRef<HTMLDivElement>();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [initialHeight, setInitialHeight] = React.useState(0);
  const [screenWidth, setScreenWidth] = React.useState<ScreenWidth>({
    current: window.innerWidth,
    old: null,
  });

  React.useEffect(() => {
    console.log('listener set');
    let old: number | null = window.innerWidth;
    window.addEventListener('resize', () => {
      console.log('*resize*', window.innerWidth, old);
      setScreenWidth({
        current: window.innerWidth,
        old,
      });
      old = window.innerWidth;
    });
  }, []);

  console.log('*render*', screenWidth);

  React.useEffect(() => {
    console.log('----------------------');
    console.log('reset effect caled', screenWidth);
    if (navbarMenuRef !== undefined) {
      let navbarMenu = navbarMenuRef.current;
      if (navbarMenu !== null) {
        if (
          screenWidth.current < 768 &&
          (screenWidth.old === null || screenWidth.old >= 768)
        ) {
          if (!isExpanded) {
            console.log('-should reset');

            setInitialHeight(navbarMenu.clientHeight);

            navbarMenu.style.height = '0';
          } else console.log('-no reset (is expanded)');
        } else console.log('-no reset');
      }
    }
    console.log('remove reset effect caled', screenWidth);
    if (navbarMenuRef != null) {
      let navbarMenu = navbarMenuRef.current;
      if (navbarMenu != null) {
        if (
          screenWidth.current >= 768 &&
          (screenWidth.old === null || screenWidth.old < 768)
        ) {
          console.log('-remove reset');
          navbarMenu.style.height = '';
        } else console.log('-no remove');
      }
    }
    console.log('----------------------');
  }, [screenWidth]);

  return (
    <nav
      className={
        `navbar` /*${screenWidth.current >= 768 ? ' navbar--show' : ''}`*/
      }
    >
      <div className="container-sm">
        <button
          className="navbar__toggle"
          onClick={() => {
            setIsExpanded((isExpanded) => !isExpanded);
            if (navbarMenuRef != null) {
              var navbarMenu = navbarMenuRef.current;
              if (navbarMenu != null) {
                if (!isExpanded) {
                  navbarMenu.style.transition = '';
                  navbarMenu.style.height = `${initialHeight}px`;
                  setTimeout(() => {
                    if (navbarMenu != null) navbarMenu.style.height = 'auto';
                  }, 300);
                } else {
                  requestAnimationFrame(function () {
                    if (navbarMenu != null) {
                      setInitialHeight(navbarMenu.clientHeight);
                      navbarMenu.style.transition = 'none';
                      navbarMenu.style.height = `${navbarMenu.clientHeight}px`;
                    }
                    requestAnimationFrame(function () {
                      if (navbarMenu != null) {
                        navbarMenu.style.transition = '';
                        navbarMenu.style.height = '0';
                      }
                    });
                  });
                }
              }
            }
          }}
        >
          menu
          <img src={require('../../img/drawing.svg')} alt="burger menu" />
        </button>
        <div className="navbar__menu" ref={navbarMenuRef}>
          <Link to="/">Home</Link>
          <Link to="/">Shop</Link>
          <NavDropdown title="Colection">
            <Link to="/">Men's</Link>
            <Link to="/">Women's</Link>
            <Link to="/">Kid's</Link>
          </NavDropdown>
          <Link to="/">Blog</Link>
          <Link to="/">Contact</Link>
          <NavDropdown title="Pages">
            <Link to="/">Blog Details</Link>
            <Link to="/">Shoping Cart</Link>
            <Link to="/">Checkout</Link>
            <Link to="/">Faq</Link>
            <Link to="/">Register</Link>
            <Link to="/">Login</Link>
          </NavDropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
