import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';
import CardList from "./CardList";
const BASE_URL = 'https://deckofcardsapi.com/api/deck';

function Deck() {
    const [deck, setDeck] = useState({});
    const [pile, setPile] = useState([]);


    useEffect(() => {
        async function getDeck() {
            let response = await axios.get(`${BASE_URL}/new/shuffle/`);
            let { remaining, deck_id } = response.data;
            setDeck(({ remaining, deck_id, shuffling: false }));
        }
        getDeck();
    }, []);

    async function randomCard() {
        let response = await axios.get(`${BASE_URL}/${deck.deck_id}/draw/`);
        let card = response.data.cards[0];
        if (card) {
            let newCard = { image: card.image, key: card.code };
            setPile(p => [...p, newCard]);
            setDeck(d => ({ ...d, remaining: response.data.remaining}));
        }
    }

    async function shuffleDeck() {
        setDeck(d => ({ ...d, shuffling: true }));
        const response = await axios.get(`${BASE_URL}/${deck.deck_id}/shuffle`);
        if (response.data.shuffled) {
            setDeck(d => ({ ...d, shuffling: false, remaining: 52 }));
            setPile([]);
        }
    }

    return (
        <div>
            {deck.remaining > 0
                ? <button disabled={deck.shuffling} onClick={randomCard}>GIMME A CARD!</button>
                : <p>Error: no cards Remaining</p>}
            <button onClick={shuffleDeck}>Shuffle</button>
            <div>{pile.length}</div>
            <CardList cards={pile} />
        </div>
    );
}

export default Deck;