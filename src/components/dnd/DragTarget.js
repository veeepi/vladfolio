import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
// import { ItemTypes } from '../utils/items';
import { DragTargetContext } from '../../App';

const DragTarget = (props) => {
  // const { toggleDisplayPagePanel } = useContext(DragContext);
  const { updateSelectedPage } = useContext(DragTargetContext);
  // const displayPagePanel = useContext(DragContext);

  const [{ isOver }, drop] = useDrop({
    accept: 'pagePanel',
    drop: (item, monitor) => updateSelectedPage(item),
    // toggleDisplayPagePanel(); //toggleDisplayPagePanel(), //console.log(item),//
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    // value={displayPagePanel}
    <div
      ref={drop}
      style={isOver ? { backgroundColor: 'red', transform: 'scale(1.2)' } : {}}
      className={
        props.aButtonIsDragging
          ? 'inner__buttonDraggingDroptarget'
          : 'inner__droptarget'
      }
    >
      {/* {console.log(props.isButtonDragging)} */}
      {/* {console.log(displayPagePanel)} */}
      {/* {props.children} */}
    </div>
  );
};
export default DragTarget;
