import React, { useState, useEffect } from "react";
import "./App.css";
import Game from "./components/Game";

function App() {
    const [animateChar, setAnimateChar] = useState(false);
    const [animateBlock, setAnimateBlock] = useState(false);
    const [message, setMessage] = useState("Play");
    const [time, setTime] = useState(null);

    const playGame = () => {
        if (!animateBlock) {
            setAnimateBlock(true);
            setMessage("Stop");
        } else {
            setAnimateBlock(false);
            setMessage("Play");
        }
    };

    useEffect(() => {
        let interval = null;
        if (animateChar) {
            interval = setInterval(() => {
                setTime((time) => time + 1);
            }, 1000);
        } else if (!animateChar && time !== 0) {
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
            <button className="button" onClick={playGame}>
                {message}
            </button>
            <div class="divider" />
            <button className="button" onClick={jump}>
                Jump
            </button>
        </div>
    );
}

export default App;
