import React from "react";
import Container from "react-bootstrap/Container";
import LoginForm from "./components/LoginForm"; 
import CustomInput from "./components/CustomInput"; 

function App() {
  return (
    <Container>
      <LoginForm /> 
      <CustomInput
        inputValue=""
        onInputChange={(value, id) => console.log(`CustomInput: ${id} - ${value}`)} 
        inputId="customInput"
        inputType="text"
        placeholder="Custom Input"
      /> {/* Utilisez le composant CustomInput */}
    </Container>
  );
}

export default App;
