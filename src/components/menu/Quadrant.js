import React from 'react';
import QuadrantHeading from './QuadrantHeading';
import pages from '../../data/Pages';

export default function Quadrant({ pageId }) {

    return (
        <div className="quadrant">
            <div className="quadrant__tile"></div>
            <div className="quadrant__tile">
                {pageId === 3 && <QuadrantHeading pageId={3} />}
                {pageId === 4 && <QuadrantHeading pageId={4} />}
            </div>
            <div className="quadrant__tile"></div>

            <div className="quadrant__tile"></div>
            <div className="quadrant__tile">
                {/* CENTER */}
                <div
                    className="quadrant__dragPrompt"
                    id={'dragPrompt' + pageId}
                >
                    <span className="quadrant__dragPrompt__text">
                        <span id="dragPromptText_D">{'D'}</span>
                        <span id="dragPromptText_R">{'R'}</span>
                        <span id="dragPromptText_A">{'A'}</span>
                        <span id="dragPromptText_G">{'G'}</span>
                    </span>
                    <span className="quadrant__dragPrompt__arrow">{'>>>'}</span>
                </div>
            </div>
            <div className="quadrant__tile"></div>

            <div className="quadrant__tile"></div>
            <div className="quadrant__tile">
                {pageId === 1 && <QuadrantHeading pageId={1} />}
                {pageId === 2 && <QuadrantHeading pageId={2} />}
            </div>
            <div className="quadrant__tile"></div>

            {/* This component should render properties from each page; data, images, etc */}
            {/* <DragButton
                    pageId={this.props.pageId}
                /> */}
        </div>
    );
}
