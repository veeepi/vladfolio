import React, { useContext } from 'react';
import { useDrag } from 'react-dnd';
import { GiBarbedSun } from 'react-icons/gi';
import { DragSourceContext } from '../../App';

// Drag Source
const DragButton = ({ pageId }) => {
  const { setAButtonIsDragging } = useContext(DragSourceContext);

  const [{ isDragging }, drag] = useDrag({
    type: 'pagePanel',
    item: {
      id: pageId,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  // setAButtonIsDragging(isDragging);

  return (
    <div
      ref={drag}
      style={isDragging ? { opacity: '0' } : { opacity: '1' }}
      className="quadrant__dragbutton"
      id={'dragButton' + pageId}
    >
      <GiBarbedSun className="quadrant__dragbutton__icon" />
    </div>
  );
};

export default DragButton;
