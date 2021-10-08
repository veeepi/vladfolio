import React, { useState } from 'react';
import posts from '../../../data/Posts';
// import Tile from '../../custom/Tile';

export default function InteractPage() {
  const [appSelected, setAppSelected] = useState(null);

  return (
    <div className="interactPage animate__animated animate__bounceInLeft">
      {appSelected ? (
        <div className="interactPage__applet">
          <button
            className="interactPage__applet__backButton"
            onClick={() => setAppSelected(null)}
          >
            Back to Menu
          </button>
          <iframe
            className="interactPage__applet__iframe"
            src="https://vladgorithms.web.app/"
            title="Google.com (test)"
          ></iframe>
        </div>
      ) : (
        <div className="interactPage__menu">
          {posts.map((item, index) => {
            return (
              // <Tile project={item} key={index} />

              <button
                key={index}
                className="interactPage__menu__post"
                onClick={() => setAppSelected(item.id)}
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
          <h1 className="interactPage__heading">
            <span className="interactPage__heading__letters">
              <span>More</span>
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
        </div>
      )}
    </div>
  );
}
