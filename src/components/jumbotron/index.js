import React from "react";
import "./style.css";

const Jumbotron = props => (
    <div className="container">
        <div className="jumbotron jombotron-fluid">
            <h1>React Clicky Game</h1>
            <div id="score">
                <h4>Score: {props.score}</h4>
                <h4>Top Score: {props.topscore}</h4>
            </div>
        </div>
    </div>
);

export default Jumbotron;