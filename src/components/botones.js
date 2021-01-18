import React from 'react';
import { useState } from "react";

export const TrafficLights = () => {
    const [color, setColor] = useState({
        clicked: null,
    });

    let redState = "";
    let yellowState = "";
    let greenState = "";

    if (color.clicked === "redlight") redState = "luz";
    if (color.clicked === "yellowlight") yellowState = "luz";
    if (color.clicked === "greenlight") greenState = "luz";

    return (
        <div id="app">
            <div>
                <div className="trafficTop"></div>
                <div className="container">
                    <div className={"redlight " + redState}
                        onClick={() => setColor({ clicked: "redlight" })}></div>
                    <div className={"yellowlight " + yellowState}
                        onClick={() => setColor({ clicked: "yellowlight" })}></div>
                    <div className={"greenlight " + greenState}
                        onClick={() => setColor({ clicked: "greenlight" })}></div>
                </div>
            </div>
        </div>
    )
};