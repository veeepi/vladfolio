import React from 'react';
import Quadrant from './Quadrant';
import pages from '../../data/Pages';

export default function outer({}) {
    return (
        <div className="outer">
            <div className="outer__quadrant" id="top_left_quadrant">
                <Quadrant pageId={pages[0].id} />
            </div>
            {/* ------------------------------- */}
            <div className="outer__quadrant" id="top_right_quadrant">
                <Quadrant pageId={pages[1].id} />
            </div>
            {/* ------------------------------- */}
            <div className="outer__quadrant" id="bottom_left_quadrant">
                <Quadrant pageId={pages[2].id} />
            </div>
            {/* ------------------------------- */}
            <div className="outer__quadrant" id="bottom_right_quadrant">
                <Quadrant pageId={pages[3].id} />
            </div>
        </div>
    );
}
