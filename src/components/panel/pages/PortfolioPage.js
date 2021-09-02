import React from 'react';
import projects from '../../../data/Projects';
import Tile from '../../custom/Tile';

export default function PortfolioPage() {
  return (
    <div className="portfolioPage">
      <div className="portfolioPage__filter">
        <form className="portfolioPage__filter__form">
          <div className="portfolioPage__filter__form__item">
            <label>Front-End</label>
            <input
              type="radio"
              id="frontEnd"
              name="portfolioItemType"
              value=""
              defaultChecked
              className="portfolioPage__filter__form__item__input"
            ></input>
          </div>
          <div className="portfolioPage__filter__form__item">
            <label>Full-Stack</label>
            <input
              type="radio"
              id="fullStack"
              name="portfolioItemType"
              value=""
              className="portfolioPage__filter__form__item__input"
            ></input>
          </div>
          <div className="portfolioPage__filter__form__item">
            <label>Upcoming</label>
            <input
              type="radio"
              id="upcoming"
              name="portfolioItemType"
              value=""
              className="portfolioPage__filter__form__item__input"
            ></input>
          </div>
        </form>
      </div>

      <div className="portfolioPage__tiles">
        {projects.map((item, index) => {
          return <Tile project={item} key={index} />;
        })}
      </div>
    </div>
  );
}
