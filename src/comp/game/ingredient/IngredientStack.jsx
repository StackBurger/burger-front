import { useState } from "react";

const IngredientStack = () => {
    const [stack, setStack] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const handlePush = () => {
    const valueToAdd = document.getElementById("stack-input").value;
    if (valueToAdd.trim() !== "") {
      setStack([...stack, valueToAdd]);
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter a value.");
    }
    };

  const handlePop = () => {
    if (stack.length > 0) {
      const newStack = [...stack];
      newStack.pop();
      setStack(newStack);
      setErrorMessage("");
    } else {
      setErrorMessage("Stack is empty.");
    }
  };

  const handleClear = () => {
    setStack([]);
    setErrorMessage("");
  };

    return (
        
    );
};

export default IngredientStack;