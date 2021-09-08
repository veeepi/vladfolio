import React from 'react';

export default function TechCheckbox({
  tech,
  techSelected,
  selectedTechs,
  setSelectedTechs,
}) {
  const handleTechCheckbox = () => {
    let newTechsSelected = [];
    if (techSelected) {
      selectedTechs.forEach((element) => {
        if (element.name !== tech.name) {
          newTechsSelected.push(element);
        }
      });
    } else {
      newTechsSelected.push(...selectedTechs);
      newTechsSelected.push(tech);
    }
    setSelectedTechs(newTechsSelected);
  };

  return (
    <div className="techCheckbox">
      <img
        src={tech.imageFilePath.default}
        alt={tech.name}
        height="20px"
        className="techCheckbox__image"
      />
      <input
        type="checkbox"
        checked={techSelected}
        onChange={handleTechCheckbox}
        className="techCheckbox__input"
      />
    </div>
  );
}
