import React, { useState } from 'react';
import { debounce } from 'lodash';
import { Scrollbars } from 'react-custom-scrollbars';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';
require('dotenv').config();

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
          <div
            id="portfolioItem_title"
            className="portfolioPage__body__tiles__tile__info__title"
          >
            {project.url ? (
              <a
                href={project.url}
                id="portfolioItem_url"
                className="portfolioPage__body__tiles__tile__info__title__link"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <AiOutlineLink
                    className="portfolioPage__body__tiles__tile__info__title__link__icon"
                    size={24}
                  />
                </span>
                {project.title}
              </a>
            ) : (
              <p className="portfolioPage__body__tiles__tile__info__title__link">
                {project.title}
              </p>
            )}

            <a
              href={project.url_gitHub}
              id="portfolioItem_url"
              className="portfolioPage__body__tiles__tile__info__title__link"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub size={32} />
            </a>
          </div>

          {/*  */}
          <Scrollbars
            style={{ height: '1vh' }}
            className="portfolioPage__body__tiles__tile__info__description"
          >
            <p
              id="portfolioItem_description"
              className="portfolioPage__body__tiles__tile__info__description__text"
            >
              {project.description}
            </p>
          </Scrollbars>

          {/*  */}
          <div
            id="portfolioItem_techIcons"
            className="portfolioPage__body__tiles__tile__info__techIcons"
          >
            {project.techIcons?.map((tech, index) => (
              <img
                key={index}
                src={tech.default}
                alt="tech-icon"
                width={'30px'}
                height={'30px'}
                className="portfolioPage__body__tiles__tile__info__techIcons__icon"
              />
            ))}
          </div>
        </div>
      ) : (
        <img
          className="portfolioPage__body__tiles__tile__image"
          src={project.imageFilePath.default}
          alt={`project-${project.title}`}
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
}
