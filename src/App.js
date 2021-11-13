import './styles/main.scss';
import './App.css';
import React, { useState, useEffect, createContext } from 'react';
import { DndProvider } from 'react-dnd';
import { isMobile } from 'react-device-detect';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import Heading from './components/custom/Heading';
import RadialMenu from './components/menu/RadialMenu';
import PagePanel from './components/panel/PagePanel';
import pages from './data/Pages';

// export const DragContext = createContext();
export const DragSourceContext = createContext();
export const DragTargetContext = createContext();

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

  return (
    <div className="App">
      <div className="background__fog"></div>
      <Heading />
      <DragSourceContext.Provider value={{ setAButtonIsDragging }}>
        <DragTargetContext.Provider value={{ updateSelectedPage }}>
          <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
            {displayPagePanel /*on &&*/ && (
              <PagePanel
                pageDisplayed={pageDisplayed}
                toggleDisplayPagePanel={toggleDisplayPagePanel}
              />
            )}
            <RadialMenu aButtonIsDragging={aButtonIsDragging} />
          </DndProvider>
        </DragTargetContext.Provider>
      </DragSourceContext.Provider>
    </div>
  );
}

export default App;
