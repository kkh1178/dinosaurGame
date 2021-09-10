import React from "react";

const Character = ({ animateChar }) => {
    console.log(animateChar);
    return (
        <div
            className={`character ${animateChar ? "character-animate " : ""}`}
        ></div>
    );
};

export default Character;
