import React, { useState } from 'react';
import { debounce } from 'lodash';
// import projectImage from '../../assets/images/projects/BOBN.jpg';

require('dotenv').config();
const PROJECT_IMAGES_FILEPATH =
  process.env.REACT_APP_FILEPATH_FROM_PORTFOLIOPAGE_TILE_OF_PROJECT_IMAGES;

export default function Tile({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="portfolioPage__body__tiles__tile"
      onMouseOver={debounce(() => setHovered(true), 100)}
      onMouseOut={debounce(() => setHovered(false), 100)}
    >
      {hovered ? (
        <div className="portfolioPage__body__tiles__tile__info">
          {/*  */}
          <h3
            id="portfolioItem_title"
            className="portfolioPage__body__tiles__tile__info__title"
          >
            <a
              href={project.url}
              id="portfolioItem_url"
              className="portfolioPage__body__tiles__tile__info__title__link"
            >
              {project.title}
            </a>
          </h3>

          {/*  */}
          <p
            id="portfolioItem_description"
            className="portfolioPage__body__tiles__tile__info__description"
          >
            {project.description}
          </p>

          {/*  */}
          <p
            id="portfolioItem_techIcons"
            className="portfolioPage__body__tiles__tile__info__techIcons"
          >
            {project.techIcons?.map((tech, index) => (
              <img
                key={index}
                src={tech.default}
                width={'30px'}
                height={'30px'}
                className="portfolioPage__body__tiles__tile__info__techIcons__icon"
              />
            ))}
          </p>
        </div>
      ) : (
        <img
          className="portfolioPage__body__tiles__tile__image"
          src={project.imageFilePath.default}
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
}
