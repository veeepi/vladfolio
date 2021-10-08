import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import projects from '../../../data/Projects';
import BackButton from '../../custom/BackButton';

export default function InteractPage() {
  const interactPageProjects = projects.filter((item) => item.interactPage);

  const [appSelected, setAppSelected] = useState(null);

  return (
    <div className="interactPage animate__animated animate__bounceInLeft">
      {appSelected ? (
        <div className="interactPage__applet">
          <BackButton action={setAppSelected} text={'Back to Menu'} />
          <iframe
            className="interactPage__applet__iframe"
            src={appSelected.url}
            title="Google.com (test)"
          ></iframe>
        </div>
      ) : (
        <Scrollbars
          style={{ height: '70vh', border: 'none' }}
          renderView={(props) => <div {...props} className="view" />}
        >
          <div className="interactPage__menu">
            {interactPageProjects.map((item, index) => {
              return (
                <button
                  key={index}
                  className="interactPage__menu__post"
                  onClick={() => setAppSelected(item)}
                >
                  <h1 className="interactPage__menu__post__title">
                    {item.title}
                  </h1>
                  <p className="interactPage__menu__post__description">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>
        </Scrollbars>
      )}
      {!appSelected && (
        <h1 className="interactPage__heading">
          <span className="interactPage__heading__letters">
            <span id="1M">M</span>
            <span id="2O">O</span>
            <span id="3R">R</span>
            <span id="4E">E</span>
            <span id="7blank"> </span>
            <span id="1C">C</span>
            <span id="2O">O</span>
            <span id="3M">M</span>
            <span id="4I">I</span>
            <span id="5N">N</span>
            <span id="6G">G</span>
            <span id="7blank"> </span>
            <span id="8S">S</span>
            <span id="91">O</span>
            <span id="11O">O</span>
            <span id="12N">N</span>
          </span>
        </h1>
      )}
    </div>
  );
}
