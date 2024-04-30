import { useState } from "react";

function Task1() {
  const [buttonCheck, setButtonCheck] = useState(true);
  const [oknoCheck, setOknoCheck] = useState(false);

  function buttonClick() {
    setButtonCheck(false);
    setOknoCheck(true);
  }

  function closeClick() {
    setButtonCheck(true);
    setOknoCheck(false);
  }

  return (
    <>
        <div className="taskone">
        {buttonCheck ? <button onClick={buttonClick}>Open Modal</button> : null}
      {oknoCheck ? (
        <div className="modal">
          <p>Some text in the Modal</p>
          <button onClick={closeClick}>X</button>
        </div>
      ) : null}
        </div>
    </>
  );
}

export default Task1;