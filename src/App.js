import React, { useState, useEffect } from "react";
import "./App.css";
import Game from "./components/Game";
import Timer from "./components/Timer";

function App() {
    const [animateChar, setAnimateChar] = useState(false);
    const [animateBlock, setAnimateBlock] = useState(false);
    const [message, setMessage] = useState("Play");
    const [time, setTime] = useState(0);

    const playGame = () => {
        // If animateBlock is false, change the state to truea and set the button message to stop
        if (!animateBlock) {
            setAnimateBlock(true);
            setMessage("Stop");
        } else {
            setAnimateBlock(false);
            setMessage("Play");
            setTime(0);
        }
    };

    // If animate block is true, start a timer that will show a fraction of a second
    useEffect(() => {
        let interval = null;
        if (animateBlock) {
            interval = setInterval(() => {
                setTime((time) => time + 1);
            }, 100);
        } else if (!animateBlock && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [animateBlock, time]);

    const jump = () => {
        if (!animateChar) {
            console.log("changing to", animateChar);
            setAnimateChar(true);
        }
        setTimeout(function () {
            setAnimateChar(false);
        }, 500);
    };

    // const checkDeath = setInterval(function () {
    //     console.log(
    //         parseInt(
    //             "character top: ",
    //             window.getComputedStyle(character).getPropertyValue("top")
    //         )
    //     );
    //     console.log(
    //         "blockLeft: ",
    //         parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    //     );
    // }, 10);

    return (
        <div className="App">
            <Game animateBlock={animateBlock} animateChar={animateChar}></Game>
            <Timer timer={time}></Timer>
            <button className="button" onClick={playGame}>
                {message}
            </button>
            <div className="divider" />
            <button className="button" onClick={jump}>
                Jump
            </button>
        </div>
    );
}

export default App;
