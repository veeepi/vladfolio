import React, { useState, useEffect } from 'react';
import projects from '../../../data/Projects';
import techs from '../../../data/Techs';
import Tile from '../../custom/Tile';
import TechCheckbox from '../../custom/TechCheckbox';
import { Scrollbars } from 'react-custom-scrollbars';
import { filterTechTypes } from '../../../utils/ArrayMaster';

export default function PortfolioPage() {
  const techTypes = filterTechTypes(techs);

  const [selectedTechs, setSelectedTechs] = useState(techs);
  const [displayedProjects, setDisplayedProjects] = useState(projects);

  useEffect(() => {
    let newDisplayedProjects = [];
    // get array of tech names
    let selectedTechNames = selectedTechs.map((tech) => {
      return tech.name;
    });

    projects.forEach((project) => {
      // match True if one element in array1(proj's techs) matches array2 (tech names selected)
      const projectTechMatch = project.techs.some(
        (r) => selectedTechNames.indexOf(r) >= 0
      );
      if (projectTechMatch) {
        // add that project to new projects to display
        newDisplayedProjects.push(project);
      }
    });
    setDisplayedProjects(newDisplayedProjects);
  }, [selectedTechs]);

  return (
    <div className="portfolioPage">
      <div className="portfolioPage__filter">
        {/* <button className="portfolioPage__filter__expandButton">Expand</button> */}
        <div className="portfolioPage__filter__buttonContainer">
          <button
            className="portfolioPage__filter__buttonContainer__button"
            onClick={() => setSelectedTechs(techs)}
          >
            All Tech
          </button>
          <button
            className="portfolioPage__filter__buttonContainer__button"
            onClick={() => setSelectedTechs([])}
          >
            None
          </button>
        </div>
        <Scrollbars
          style={{ height: '1vh', overflowX: 'hidden' }}
          renderTrackHorizontal={(props) => (
            <div
              {...props}
              style={{ display: 'none' }}
              className="track-horizontal"
            />
          )}
          className="portfolioPage__filter__selectContainer"
        >
          {techTypes.map((type, index) => {
            return (
              <div
                key={index}
                className="portfolioPage__filter__selectContainer__category"
              >
                <h3 className="portfolioPage__filter__selectContainer__category__title">
                  {type}
                </h3>
                {techs.map((item, index) => {
                  let techSelected = false;
                  selectedTechs.forEach((element) => {
                    if (item.name === element.name) {
                      techSelected = true;
                    }
                  });
                  if (item.type === type) {
                    return (
                      <TechCheckbox
                        tech={item}
                        key={index}
                        techSelected={techSelected}
                        selectedTechs={selectedTechs}
                        setSelectedTechs={setSelectedTechs}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            );
          })}
        </Scrollbars>
      </div>

      <Scrollbars style={{ height: '79vh' }} className="portfolioPage__body">
        <div className="portfolioPage__body__tiles">
          {displayedProjects.map((item, index) => {
            return <Tile project={item} key={index} />;
          })}
        </div>
      </Scrollbars>
    </div>
  );
}
