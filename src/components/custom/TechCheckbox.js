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
      newTechsSelected = selectedTechs;
      newTechsSelected.push(tech);
    }
    setSelectedTechs(newTechsSelected);
  };

  return (
    <div className="portfolioPage__filter__form__item">
      <img src={tech.imageFilePath.default} alt={tech.name} height="20px" />
      <input
        type="checkbox"
        checked={techSelected}
        onChange={handleTechCheckbox}
        className="portfolioPage__filter__form__item__input"
      ></input>
    </div>
  );
}
