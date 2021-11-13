import React from 'react';
import { useDrag } from 'react-dnd';
import { GiBarbedSun } from 'react-icons/gi';

// Drag Source
const DragButton = (props) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'pagePanel',
    item: {
      id: props.pageId,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={isDragging ? { opacity: '0' } : { opacity: '1' }}
      className="quadrant__dragbutton"
      id={'dragButton' + props.pageId}
    >
      {/* {isDragging && toggleAButtonIsDragging()} */}
      <GiBarbedSun className="quadrant__dragbutton__icon" />
    </div>
  );
};

export default DragButton;
