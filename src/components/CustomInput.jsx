import React from "react";
import FormControl from "react-bootstrap/FormControl";

const CustomInput = ({ inputValue, onInputChange, inputId, inputType = "text", ...rest }) => {
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    onInputChange(newValue, inputId);
  };

  return (
    <FormControl
      id={inputId}
      value={inputValue}
      onChange={handleInputChange}
      type={inputType}
      {...rest}
    />
  );
};

export default CustomInput;
