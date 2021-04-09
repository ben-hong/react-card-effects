import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';
import CardList from "./CardList";

function Deck() {
    const {deck, setDeck} = useState({});
    const {pile, setPile} = useState([]);
    console.log('setdeck', setDeck);
    useEffect(() => {
        async function getDeck() {
            let response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
            let newDeck = response.data;
            console.log(newDeck);
            setDeck(oldDeck => newDeck)
        }
        getDeck()
    }, [])

    function randomCard() {
        if (!deck.card) {
            
        }
    }

    return (
        <div>
            <CardList />
            <button onClick={randomCard}>GIMME A CARD!</button>
        </div>
    )
}

export default Deck;