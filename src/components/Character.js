// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterCard = styled.div`
    border: 2px solid black;
    padding: 2%;
    margin: 5% 10%;
    display: flex;
    justify-content: space-evenly;
    background:#7f7f7f;
    background:rgba(0,0,0,0.5);
    color: white;
    border-radius: 15px;

    p {
        font-size: 1.3rem;
    }
`

export default function Character ({char}) {
    return (
        <div>
            <CharacterCard>
                <h2>{char.name}</h2>
                <p>Height: {char.height}</p>
                <p>Mass: {char.mass}</p>
                <p>Hair Color: {char.hair_color}</p>
                <p>Skin Color: {char.skin_color}</p>
                <p>Eye Color: {char.eye_color}</p>
                <p>Birth Year: {char.birth_year}</p>
                <p>Gender: {char.gender}</p>
            </CharacterCard>
        </div>
    )
}