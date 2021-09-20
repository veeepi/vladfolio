import React from 'react';
import pages from '../../data/Pages';

const QuadrantHeading = (props) => {
  //
  const pageTitle = pages[props.pageId - 1].title;
  const arrayPageTitle = pageTitle.split('');

  return (
    <div className="quadrant__heading">
      {/* {this.state.title} */}

      <div className={'quadrant__heading__' + props.pageId}>
        {arrayPageTitle.map((char, index) => {
          return (
            <span
              key={index}
              id={'char' + index}
              className="quadrant__heading__char"
            >
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default QuadrantHeading;
