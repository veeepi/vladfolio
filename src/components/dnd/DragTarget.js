import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { DragTargetContext } from '../../App';

const DragTarget = (props) => {
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
      style={isOver ? { backgroundColor: 'red', transform: 'scale(1.2)' } : {}}
      className={
        props.aButtonIsDragging
          ? 'inner__buttonDraggingDroptarget'
          : 'inner__droptarget'
      }
    ></div>
  );
};
export default DragTarget;
