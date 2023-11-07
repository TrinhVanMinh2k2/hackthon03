import React, { useState } from "react"
import './App.css';


function WordCounter() {

  //them value tu input

  const [text, setText] = useState("");
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  //in hoa + in thuong
  const handleUp = () => {
    setText(text.toUpperCase())
  };
  const handleLow = () => {
    setText(text.toLowerCase())
  };
  return (
    <>
      <div className="container">
        <h1>Word Counter</h1>
        <div className="row">
          <div className="col-4">
            <p>Word</p>
            <span>{text ? text.trim().split(/\s+/).length : 0}</span>
          </div>
          <div className="col-4">
            <p>Letter</p>
            <span>{text ? text.length : 0}</span>
          </div>
          <div className="col-4">
            <p>Paragraph</p>
            <span>0</span>
          </div>
        </div>
        <div className="form">
          <textarea
            onChange={handleChangeText}
            value={text}
            className="text"
          />
        </div>
        <div className="button">
          <button className="btn" onClick={handleUp}>Click to Uppenrcase</button>
          <button className="btn" onClick={handleLow}>Click to Lowercase</button>
        </div>
      </div>
    </>
  );
}

export default WordCounter;
