import React from 'react';
import projects from '../../../data/Projects';
import techs from '../../../data/Techs';
import Tile from '../../custom/Tile';
import TechCheckbox from '../../custom/TechCheckbox';
import { Scrollbars } from 'react-custom-scrollbars';

export default function PortfolioPage() {
  // const bodyHeight = window.innerHeight >

  return (
    <div className="portfolioPage">
      <div className="portfolioPage__filter">
        <button>Expand</button>
        <form className="portfolioPage__filter__form">
          {techs.map((item, index) => {
            return <TechCheckbox tech={item} key={index} />;
          })}
        </form>
      </div>

      <Scrollbars style={{ height: '79vh' }} className="portfolioPage__body">
        <div className="portfolioPage__body__tiles">
          {projects.map((item, index) => {
            return <Tile project={item} key={index} />;
          })}
        </div>
      </Scrollbars>
    </div>
  );
}
