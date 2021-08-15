import './styles/main.scss';
import './App.css';
import React, { useState, useEffect } from 'react';
import RadialMenu from './components/menu/RadialMenu';
import PagePanel from './components/panel/PagePanel';
import pages from './data/Pages';

function App() {
  // state var
  const [displayPagePanel, setDisplayPagePanel] = useState(false); // should update after via useEffect Hook
  const [pageDisplayed, setPageDisplayed] = useState(pages[0]);

  useEffect(() => {
    // when pageDisplayed changes
    if (pageDisplayed !== pages[0]) {
      // AND page=nonzero,
      toggleDisplayPagePanel(); // toggle display of the Panel
    }
  }, [pageDisplayed]);

  // functions
  const toggleDisplayPagePanel = () => {
    setDisplayPagePanel((prevDisplayPagePanel) => !prevDisplayPagePanel);
  };

  return (
    <div className="App">
      <RadialMenu />

      {displayPagePanel /*on &&*/ && (
        <PagePanel pageDisplayed={pageDisplayed} />
      )}
    </div>
  );
}

export default App;
