export const filterTechTypes = (array) => {
  let techTypes = array.map((tech) => {
    return tech.type;
  });
  let filteredTechTypes = techTypes
    .filter((ele, pos) => {
      return techTypes.indexOf(ele) === pos;
    })
    .sort();
  return filteredTechTypes;
};
