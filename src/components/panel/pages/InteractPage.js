import React from 'react';
import posts from '../../../data/Posts';

export default function InteractPage() {
  return (
    <div className="interactPage animate__animated animate__bounceInLeft">
      {/* Coming Soon */}
      {/* Make Fontsize individual letters reactive on Hover */}
      {/* Infinite Transition in Color? cycle between 4 */}
      {/* Display a piece of data somehow */}

      <h1 className="interactPage__heading">
        <span className="interactPage__heading__letters">
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
        <br />
        {/* <IoConstructOutline
						size={42}
						className="interactPage__heading__icon"
					/> */}
      </h1>
      {/* <div className="interactPage__body">
        {posts.map((item, index) => {
          return (
            <div key={index} className="interactPage__body__post">
              <h1 className="interactPage__body__post__title">{item.title}</h1>
              <p className="interactPage__body__post__description">
                {item.description}
              </p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
