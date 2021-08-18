import React from 'react';
import pages from '../../data/Pages';
import CloseButton from './CloseButton';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import InteractPage from './pages/InteractPage';
import PortfolioPage from './pages/PortfolioPage';

export default function PagePanel({ pageDisplayed, toggleDisplayPagePanel }) {
  const pageTitle = pages[pageDisplayed.id - 1].title;
  const arrayPageTitle = pageTitle.split('');

  return (
    <div className="pagePanel">
      {/* display data from an object */}
      <CloseButton toggleDisplayPagePanel={toggleDisplayPagePanel} />
      <h1 className="pagePanel__heading">
        {arrayPageTitle.map((char, index) => {
          return (
            <span
              key={index}
              id={'char' + index}
              className="pagePanel__heading__char"
            >
              {char}
            </span>
          );
        })}
      </h1>

      {/* This component should conditionally render other components */}
      <div className="conditionalRender">
        {pageDisplayed.id === 1 && <InteractPage />}
        {pageDisplayed.id === 2 && <AboutPage />}
        {pageDisplayed.id === 3 && <ContactPage />}
        {pageDisplayed.id === 4 && <PortfolioPage />}
      </div>
    </div>
  );
}
