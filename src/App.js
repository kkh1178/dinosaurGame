import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Game from "./components/Game";
import Timer from "./components/Timer";

function App() {
    const [animateChar, setAnimateChar] = useState(false);
    const [animateBlock, setAnimateBlock] = useState(false);
    const [message, setMessage] = useState("Play");
    const [time, setTime] = useState(0);

    // DEfining refs to use to get the DOM element
    const block = useRef();
    const character = useRef();

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

    // let characterTop = parseInt(
    //     window.getComputedStyle(character.style).getPropertyValue("top")
    // );
    // let blockLeft = parseInt(
    //     window.getComputedStyle(block.style).getPropertyValue("left")
    // );

    // If animate block is true, start a timer that will show a fraction of a second

    useEffect(() => {
        const checkDeath = setInterval(function () {
            let characterTop = parseInt(
                window
                    .getComputedStyle(character.current)
                    .getPropertyValue("top")
            );
            let blockLeft = parseInt(
                window.getComputedStyle(block.current).getPropertyValue("left")
            );
            // Calculate if the top of the block hits the left of the other block
            if (blockLeft < 20 && blockLeft > 0 && characterTop >= 60) {
                setAnimateBlock(false);
                setMessage("Play");
                setTime(0);
                alert("you lose!");
            }

            // console.log(characterTop);
        }, 10);

        let interval = null;
        if (animateBlock) {
            interval = setInterval(() => {
                setTime((time) => time + 1);
            }, 100);
        } else if (!animateBlock && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [animateBlock, time, message]);

    const jump = () => {
        if (!animateChar) {
            setAnimateChar(true);
        }
        setTimeout(function () {
            setAnimateChar(false);
        }, 500);
    };

    // const checkDeath = setInterval(function () {}, 10);

    return (
        <div className="App">
            <Game
                animateBlock={animateBlock}
                animateChar={animateChar}
                allRefs={{ character, block }}
            ></Game>
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
