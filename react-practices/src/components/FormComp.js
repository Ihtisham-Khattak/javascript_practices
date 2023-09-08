import React, { useState, useEffect } from "react";

const FormComp = () => {


  const [userName, setUserName] = useState({ nameValue: "", isCorrect: true });

  const addBTN = () => {
    const inputValue = document.querySelector("input[name='userName']").value;
    setUserName((prev) => ({ ...prev, nameValue:inputValue }));
  };
  
  const correctBTN = () => {
    setUserName((prev) => ({ ...prev, isCorrect: false }));
  };

  useEffect(() => {
    console.log ("useeffect Call")
  }, [])

  return (
    <div>
      <h2>Form Control</h2>
      <input name="userName"  onChange={(e) => e.target.value} />
      <br />
      <button type="button" onClick={() => addBTN()}>
        Add Name
      </button>
      <button type="button" onClick={() => correctBTN()}>
        Add Correct
      </button>
      <br />
      {`${userName.nameValue} is like ${userName.isCorrect.toString()}`}
    </div>
  );
};

export default FormComp;
