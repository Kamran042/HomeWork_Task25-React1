import { useState } from "react";

function Task2() {
  const [buttonCheck, setButtonCheck] = useState(true);

  function buttonClick() {
    setButtonCheck(prev => !prev);
  }

  return (
    <>
      {buttonCheck ? (
        <div className="bodyBlack">
          <div className="header">
            <button onClick={buttonClick} className="blackBTN">White Team</button>
          </div>
          <div className="main">
            <h1 className="blackModetxt">WELCOME TO REACT JS</h1>
          </div>
        </div>
      ) : (
        <div className="bodyWhite">
          <div className="header">
            <button onClick={buttonClick} className="whiteBTN">Black Team</button>
          </div>
          <div className="main">
            <h1 className="whiteModetxt">WELCOME TO REACT JS</h1>
          </div>
        </div>
      )}
    </>
  );
}

export default Task2;
