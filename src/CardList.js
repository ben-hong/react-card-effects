import React from "react";
import Card from "./Card";

function CardList({cards}) {
    return (
        <div style={{position: "relative"}}>
            {cards.map( (c,idx) => (
                <Card idx={idx} key={c.key} image={c.image}/>
            ))}
        </div>
    )
}

export default CardList;