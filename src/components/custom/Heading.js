import React, { Component } from 'react';

export default class Heading extends Component {
  render() {
    return (
      <div className="heading">
        <div className="heading__title">
          <span id="vlad" className="heading__title__name">
            VLAD
          </span>
          <span id="preduna" className="heading__title__name">
            PREDUNA
          </span>
        </div>

        <div className="heading__subtitle">
          <span id="full" className="heading__subtitle__item">
            Full
          </span>
          <span id="stack" className="heading__subtitle__item">
            Stack
          </span>
          <span id="web" className="heading__subtitle__item">
            Web
          </span>
          <span id="dev" className="heading__subtitle__item">
            Dev
          </span>
        </div>
      </div>
    );
  }
}
