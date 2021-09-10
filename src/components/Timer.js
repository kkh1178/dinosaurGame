import React from "react";

const Timer = ({ timer }) => {
    return (
        <div>
            <h3>Timer</h3>
            <div>Running: {timer}</div>
        </div>
    );
};

export default Timer;
