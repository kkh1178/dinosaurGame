import React, { useRef } from "react";

const Character = ({ animateChar, allRefs }) => {
    return (
        <div
            ref={allRefs.character}
            className={`character ${animateChar ? "character-animate " : ""}`}
        ></div>
    );
};

export default Character;
