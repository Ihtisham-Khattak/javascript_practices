import React, {useState} from "react";

const FormComp = () => {
  const [userName, setUserName] = useState({ name: "", isCorrect: true });
  return (
    <div>
      <h2>Form Control</h2>
      <input name="userName" onChange={((e) => (e.target.value))} />
      <br />
      <button type="button" onClick={() => addBTN()}>Add Name</button>
      <button type="button" onClick={correctBTN}>Add Correct</button>
      <br />
      {`${userName.name} is like ${userName.isCorrect.toString()}`}
    </div>
  );
};

export default FormComp;
