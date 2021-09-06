import React, { useState, useEffect } from 'react';
import projects from '../../../data/Projects';
import techs from '../../../data/Techs';
import Tile from '../../custom/Tile';
import TechCheckbox from '../../custom/TechCheckbox';
import { Scrollbars } from 'react-custom-scrollbars';

export default function PortfolioPage() {
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
        <button>Expand</button>
        <form className="portfolioPage__filter__form">
          {techs.map((item, index) => {
            let techSelected = false;
            selectedTechs.forEach((element) => {
              if (item.name === element.name) {
                techSelected = true;
              }
            });
            return (
              <TechCheckbox
                tech={item}
                key={index}
                techSelected={techSelected}
                selectedTechs={selectedTechs}
                setSelectedTechs={setSelectedTechs}
              />
            );
          })}
        </form>
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
