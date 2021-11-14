import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { DragTargetContext } from '../../App';

const DragTarget = ({ aButtonIsDragging }) => {
  const { updateSelectedPage } = useContext(DragTargetContext);

  const [{ isOver }, drop] = useDrop({
    accept: 'pagePanel',
    drop: (item, monitor) => updateSelectedPage(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={
        isOver ? { filter: 'brightness(130%)', transform: 'scale(1.15)' } : {}
      }
      className={`inner__droptarget ${
        aButtonIsDragging ? 'inner__droptarget__dropPrompt' : ''
      }`}
      // className={
      //   aButtonIsDragging
      //     ? 'inner__buttonDraggingDroptarget'
      //     : 'inner__droptarget'
      // }
    ></div>
  );
};
export default DragTarget;
