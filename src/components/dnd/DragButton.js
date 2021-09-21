// import React, { useContext } from 'react';
import React from 'react';
import { useDrag } from 'react-dnd';
// import { ItemTypes } from '../utils/items';
import { GiBarbedSun } from 'react-icons/gi';
// import { DragSourceContext } from '../../App';

// Drag Source
const DragButton = (props) => {
  // const { toggleAButtonIsDragging } = useContext(DragSourceContext);

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
    // ref={drag} => this is the draggable element
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
