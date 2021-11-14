export default function getCoordinatesClicked(e) {
  e.preventDefault();
  let clientX = e.clientX;
  let clientY = e.clientY;
  return { clientX, clientY };
}
