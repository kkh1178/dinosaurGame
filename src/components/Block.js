import React from "react";
import "../App.css";

const Block = ({ animateBlock }) => {
    // console.log("AnimateBlock should be: ", animateBlock);
    return (
        <div className={`block ${animateBlock ? "block-animate" : ""}`}></div>
    );
};

export default Block;
