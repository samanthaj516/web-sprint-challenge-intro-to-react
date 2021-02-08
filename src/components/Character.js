// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    background: black;
    opacity: 0.5;
    color: white;
    border: 4px solid;
    border-radius: 2rem;
    border-color: red;
    margin: 10px;
    padding: 10px;
    text-align: center;
    max-height: 400px;
    h2 {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 20px;
    }
`;

const Character = (props) => {
    const { character } = props;
    return (
        <StyledCharacter>
         <h2>{character.name}</h2>
         <div className="Info">
          <list>
            <li>Gender: {character.gender}</li>
            <li>Height: {character.height} inches</li>
            <li>Mass: {character.mass} kg</li>
            <li>Skin Color: {character.skin_color}</li>
            <li>Hair color: {character.hair_color}</li>
            <li>Eye color: {character.eye_color}</li>
          </list>
         </div>
      </StyledCharacter>
    )
    };

export default Character;

