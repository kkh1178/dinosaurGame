import React from "react";
import Block from "./Block";
import Character from "./Character";

const Game = ({ animateBlock, animateChar }) => {
    return (
        <div className="game">
            <Block animateBlock={animateBlock}></Block>
            <Character animateChar={animateChar}></Character>
        </div>
    );
};

export default Game;
