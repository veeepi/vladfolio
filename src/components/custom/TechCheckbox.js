import React from 'react';

export default function TechCheckbox({ tech }) {
  return (
    <div className="portfolioPage__filter__form__item">
      <img src={tech.imageFilePath.default} alt={tech.name} height="20px" />
      <input
        type="checkbox"
        //   id="frontEnd"
        //   name="portfolioItemType"
        //   value="true"
        //   defaultChecked
        className="portfolioPage__filter__form__item__input"
      ></input>
    </div>
  );
}
