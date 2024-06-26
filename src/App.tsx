import React from 'react';
import AppHeader from "AppHeader";
import 'App.css';
import styled from 'styled-components';
import { MyButton } from "components/MyButton";

interface ButtonProps {
    primary?: boolean;
}

const Button = styled.button<ButtonProps>`
  background: ${(props: ButtonProps) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props: ButtonProps) => (props.primary ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  
  &:hover {
    background-color: ${props => (props.primary ? '#D02090' : 'lightgrey')};
  }
`;

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Button primary>Primary Button</Button>
      <Button>Default button</Button>
      <MyButton />
    </div>
  );
}

export default App;
