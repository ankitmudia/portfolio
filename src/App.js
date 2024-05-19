import React, { useEffect, useState } from 'react';
import Main from './components/Main';
import Contact from './components/Contact';
import Experiences from './components/Experiences';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import BackgroundView from './Layout/BackgroundView';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("isDarkMode") === 'true';
    setIsDarkMode(savedMode);
  }, []);

  const changeMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("isDarkMode", newMode);
  };

  return (
    <BackgroundView>
      <div className={`font-poppins select-none transition duration-500 ${isDarkMode ? 'text-white bg-black' : 'text-black bg-white'} dark:bg-[#20262E] dark:text-white`}>
        <Navbar changeMode={changeMode} isDarkMode={isDarkMode}/>
        <Main isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Experiences />
        <Contact />
      </div>
    </BackgroundView>
  )
}

export default App;