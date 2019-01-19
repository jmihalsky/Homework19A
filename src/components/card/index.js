import React from "react";
import "./style.css";


const ImageCard = props => (
    <div className="card" onClick = {() => {props.game_logic(props.id); props.shuffle(props.id);}}>
            <img className="cardpics" id={props.id} alt={props.name} src={props.image} />
    </div>
);

export default ImageCard;