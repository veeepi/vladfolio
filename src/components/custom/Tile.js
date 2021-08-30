import React, { useState } from 'react';
import { debounce } from 'lodash';

export default function Tile({ portfolioItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="portfolioPage__tiles__tile"
      onMouseOver={debounce(() => setHovered(true), 200)}
      onMouseOut={debounce(() => setHovered(false), 200)}
    >
      {hovered ? (
        <div className="portfolioPage__tiles__tile__info">
          <h3
            id="portfolioItem_title"
            className="portfolioPage__tiles__tile__info__detail"
          >
            <a
              href={portfolioItem.url}
              id="portfolioItem_url"
              className="portfolioPage__tiles__tile__info__detail__link"
            >
              {portfolioItem.title}
            </a>
          </h3>
          <p>
            {portfolioItem.techIcons?.map((tech, index) => (
              <img src={tech} width={'50px'} />
            ))}
          </p>
          <p
            id="portfolioItem_description"
            className="portfolioPage__tiles__tile__info__detail"
          >
            {portfolioItem.description}
          </p>
        </div>
      ) : (
        <img
          className="portfolioPage__tiles__tile__info"
          src={portfolioItem.cardImagePath}
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
}
