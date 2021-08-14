import './styles/main.scss';
import './App.css';
import React, { useState } from 'react';
import RadialMenu from './components/menu/RadialMenu';
import PagePanel from './components/panel/PagePanel';
import pages from './data/Pages';

function App() {
  const [pageDisplayed, setPageDisplayed] = useState(pages[0]);

  return (
    <div className="App">
      <RadialMenu />
      <PagePanel pageDisplayed={pageDisplayed} />
    </div>
  );
}

export default App;
