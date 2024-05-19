import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu, GiMoon } from 'react-icons/gi';

function Navbar({ changeMode, isDarkMode }) {
  const [showMenu, setShowMenu] = useState(false);

  const scrollToComponent = (componentId) => {
    const component = document.getElementById(componentId);
    if (component) {
      component.scrollIntoView({
        behavior: 'smooth',
        duration: 2000,
        block: 'start',
        inline: 'nearest',
      });
    }
  };

  const handleWindowResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 640 && showMenu) {
      setShowMenu(false);
    }
  };

  // to handle window resize for mobile view
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [showMenu]);

  return (
    <>
      <div className="flex mt-[-2px] justify-between py-[2rem] pl-[3.5rem] pr-[3.5rem] sm:px-[1.5rem] items-center relative">
        <button onClick={changeMode} className="relative group">
          <GiMoon className="h-[2rem] w-[2rem]" />
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden w-max rounded bg-gray-800 text-white text-xs py-1 px-2 group-hover:block">
            {isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
          </span>
        </button>
        {!showMenu && (
          <ul className={`hidden sm:block md:flex font-[400] text-custom-20 gap-[5rem] md:gap-[3rem] lg:gap-4rem ${isDarkMode ? 'dark:font-[300] dark:text-white' : 'text-black'}`}>
            <li
              className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400] cursor-pointer"
              onClick={() => scrollToComponent('experience')}
            >
              Experience
            </li>
            <li
              className="tracking-wide hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400] cursor-pointer"
              onClick={() => scrollToComponent('projects')}
            >
              Projects
            </li>
            <li
              className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400] cursor-pointer"
              onClick={() => scrollToComponent('contact')}
            >
              Contact
            </li>
          </ul>
        )}
        <div className="flex">
          <div className="sm:hidden absolute top-[2rem] right-[3.5rem]">
            <GiHamburgerMenu
              className="h-6 w-6 cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
          {showMenu && (
            <ul className="flex flex-col font-[400] text-black dark:text-white dark:font-[300] text-custom-20 gap-[2rem] md:gap-[3rem] lg:gap-2rem absolute top-[4.5rem] right-[3.5rem] z-10 bg-[#fdd6cf] p-4 shadow-md rounded">
              <li
                className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400] cursor-pointer"
                onClick={() => scrollToComponent('experience')}
              >
                Experience
              </li>
              <li
                className="tracking-wide hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400] cursor-pointer"
                onClick={() => scrollToComponent('projects')}
              >
                Projects
              </li>
              <li
                className="tracking-wider hover:after:bg-black dark:hover:after:bg-[#ec6e59;] font-[400] cursor-pointer"
                onClick={() => scrollToComponent('contact')}
              >
                Contact
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;