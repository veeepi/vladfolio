import React from 'react';
import pages from '../../data/Pages';
import CloseButton from './CloseButton';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import InteractPage from './pages/InteractPage';
import PortfolioPage from './pages/PortfolioPage';
import { Scrollbars } from 'react-custom-scrollbars';

export default function PagePanel({ pageDisplayed, toggleDisplayPagePanel }) {
  const pageTitle = pages[pageDisplayed.id - 1].title;
  const arrayPageTitle = pageTitle.split('');

  return (
    <div className="pagePanel">
      {/* display data from an object */}
      <div className="pagePanel__heading">
        <CloseButton toggleDisplayPagePanel={toggleDisplayPagePanel} />
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
      </div>

      {/* This component should conditionally render other components */}
      <div className="pagePanel__body">
        <Scrollbars style={{ width: 500, height: 300 }}>
          {pageDisplayed.id === 1 && <InteractPage />}
          {pageDisplayed.id === 2 && <AboutPage />}
          {pageDisplayed.id === 3 && <ContactPage />}
          {pageDisplayed.id === 4 && <PortfolioPage />}
        </Scrollbars>
      </div>
    </div>
  );
}
