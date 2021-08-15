import './styles/main.scss';
import './App.css';
import React, { useState, useEffect, createContext } from 'react';
import RadialMenu from './components/menu/RadialMenu';
import PagePanel from './components/panel/PagePanel';
import pages from './data/Pages';

export const DragContext = createContext();

function App() {
  // state var
  const [displayPagePanel, setDisplayPagePanel] = useState(false); // should update after via useEffect Hook
  const [pageDisplayed, setPageDisplayed] = useState(pages[0]);
  const [aButtonIsDragging, setAButtonIsDragging] = useState(false); // for reactive styling

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
  const updateSelectedPage = (page) => {
    setPageDisplayed(page);
  };

  // function triggered by DragButton's isDragging property
  const toggleAButtonIsDragging = () => {
    setAButtonIsDragging((prevAButtonIsDragging) => !prevAButtonIsDragging);
  };

  return (
    <div className="App">
      <RadialMenu />

      <DragContext.Provider
        value={{ toggleAButtonIsDragging, updateSelectedPage }}
      >
        {displayPagePanel /*on &&*/ && (
          <PagePanel pageDisplayed={pageDisplayed} />
        )}
      </DragContext.Provider>
    </div>
  );
}

export default App;
