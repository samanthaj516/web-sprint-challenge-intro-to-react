import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  font-size: 5rem;
  color: white;
  display: flex;
  justify-content: center;
  letter-spacing: 10px;
`;

const StyledDiv = styled.div`
  flex-flow: column;  
  text-align: center;
  min-height: 100vh;
  display: flex;
 
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out the state properties here.
  const [ character, setCharacter ] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a  side effect in a component, you want to think about which state and/or props it should sync up with, if any.
  const fetchCharacter = () => {
    axios.get("https://swapi.dev/api/people")
    .then(response => {
      setCharacter(response.data);
    })
    .catch(error => console.log(error));
  }

  useEffect(fetchCharacter, []);

return (
  <StyledDiv className="App">
    <StyledHeader className="Header">Characters</StyledHeader>
      {
        character.map((character, index) => {
          return <Character character={character} key={index}></Character>
        })
      }
  </StyledDiv>
);
}

export default App;