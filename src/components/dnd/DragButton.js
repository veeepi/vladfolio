import React, { useState, useEffect, useContext } from 'react';
import { useDrag } from 'react-dnd';
import { GiBarbedSun } from 'react-icons/gi';
import { DragSourceContext } from '../../App';
import getCoordinatesClicked from '../../utils/getCoordinatesClicked';
import { DragTargetContext } from '../../App';

// Drag Source
const DragButton = ({ pageId }) => {
  const { setAButtonIsDragging } = useContext(DragSourceContext);
  const { updateSelectedPage } = useContext(DragTargetContext);

  const [{ isDragging }, drag] = useDrag({
    type: 'pagePanel',
    item: {
      id: pageId,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  useEffect(() => {
    setAButtonIsDragging(isDragging);
  }, [isDragging]);

  const [clickedOnce, setClickedOnce] = useState(false);
  useEffect(() => {
    if (clickedOnce) {
      setTimeout(() => {
        setClickedOnce(false);
      }, 2000);
    }
  }, [clickedOnce]);

  const [eventData, setEventData] = useState(null);

  const handleDragButtonClicks = (e) => {
    e.preventDefault();
    if (clickedOnce) {
      // open the panel
      updateSelectedPage({ id: pageId });
      setClickedOnce(false);
    } else {
      setEventData(getCoordinatesClicked(e));
      setClickedOnce(true);
    }
  };

  return (
    <>
      {clickedOnce && (
        <h5
          className="quadrant__clickAgainPrompt"
          style={{
            display: `${clickedOnce ? 'block' : 'none'}`,

            left: `${eventData.clientX}px`,
            top: `${eventData.clientY}px`,
          }}
        >
          {'again, or drag'}
        </h5>
      )}
      <button
        ref={drag}
        style={isDragging ? { opacity: '0' } : { opacity: '1' }}
        className={`quadrant__dragbutton`}
        id={'dragButton' + pageId}
        onClick={(e) => handleDragButtonClicks(e)}
      >
        <GiBarbedSun
          className={`quadrant__dragbutton__icon ${
            clickedOnce ? 'quadrant__dragbutton__icon__clickedOnce' : ''
          }`}
        />
      </button>
    </>
  );
};

export default DragButton;
