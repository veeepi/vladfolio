import React from 'react';
import pages from '../../data/Pages';
import CloseButton from '../custom/CloseButton';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import InteractPage from './pages/InteractPage';
import PortfolioPage from './pages/PortfolioPage';

export default function PagePanel({ pageDisplayed, toggleDisplayPagePanel }) {
  const pageTitle = pages[pageDisplayed.id - 1].title;
  const arrayPageTitle = pageTitle.split('');

  return (
    <div className="pagePanel">
      <div className="pagePanel__heading">
        <h1 className="pagePanel__heading__title">
          {arrayPageTitle.map((char, index) => {
            return (
              <span
                key={index}
                id={'char' + index}
                className="pagePanel__heading__title__char"
              >
                {char}
              </span>
            );
          })}
        </h1>
        <CloseButton toggleDisplayPagePanel={toggleDisplayPagePanel} />
      </div>

      {/* This component should conditionally render other components */}
      <div className="pagePanel__body">
        {pageDisplayed.id === 1 && <InteractPage />}
        {pageDisplayed.id === 2 && <AboutPage />}
        {pageDisplayed.id === 3 && <ContactPage />}
        {pageDisplayed.id === 4 && <PortfolioPage />}
      </div>
    </div>
  );
}
