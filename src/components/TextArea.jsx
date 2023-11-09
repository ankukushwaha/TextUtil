import React, { useState } from "react";

function TextArea(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setText(value);
  }

  function handleUpClick() {
    if(text.length === 0){
      props.func("Enter any text first");
    }
    else{
      const value = text.toUpperCase();
      setText(value);
      props.func("Converted To Upper Case");
    }
    
  }
  function handleLoClick() {
    if(text.length === 0){
      props.func("Enter any text first");
    }
    else{
      const value = text.toLowerCase();
      setText(value);
      props.func("Converted To Lower Case");
    }
    
  }
  function handleClearClick() {
    if(text.length !== 0){
      setText("");
      props.func("Cleared");
    }
    else{
      props.func("Nothing is to clear");
    }    
  }
  function handleCopyText() {
    if(text.length !== 0){
      navigator.clipboard.writeText(text);
      props.func("Copy To Clipboard");
    }
    else{
      props.func("Write something to copy");
    }
  }
  function handleRemoveExtraSpace() {
    const val = document.getElementById("my-box");
    const ans = val.value.replace(/\s+/g, " ");
    if(text.length !== 0){
      if(text.length === ans.length){
        props.func("No Extra Spaces Found");
      }
      else{
        setText(ans);
        props.func("Extra Spaces Removed");
      }
    }
    else{
      props.func("Enter any text first");
    }
  }

  function ExtractNumber() {
    const val = document.getElementById("my-box");
    const ans = val.value.match(/\d/g);
    if (ans) {
      ans.join("");
      setText(ans);
      props.func("Number Extracted");
    }
    else{
      props.func("No Number Found");
    }
  }

  function ExtractText() {
    const val = document.getElementById("my-box");
    const ans = val.value.replace(/\d/g, "");
    const len = ans.split(" ").filter((val) => {return val.length !== 0}).length;
    if(len === 0){
      props.func("No Text Found");
    }
    else{
      setText(ans);
      props.func("Text Extracted");
    }
  }

  function ExtractEmail() {
    const val = document.getElementById("my-box");
    const email = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const ans = val.value.match(email);
    if(ans){
      setText(ans);
      props.func("Email Extracted");
    }
    else{
      props.func("No Email Found");
    }
  }

  return (
    <div className={`form-group container mt-3 `}>
      <h2 className={`my-3 text-light`}>Enter your text here!</h2>
      <textarea
        onChange={handleChange}
        value={text}
        className={"form-control"}
        style={{
          backgroundColor: props.mode === "light" ? "white" : "grey",
          color: props.mode === "light" ? "black" : "white",
        }}
        id="my-box"
        rows="7"
      ></textarea>
      <button
        onClick={handleUpClick}
        type="button"
        className="btn btn-primary my-2 mx-2"
      >
        UpperCase
      </button>
      <button
        onClick={handleLoClick}
        type="button"
        className="btn btn-secondary my-2 mx-2"
      >
        LowerCase
      </button>
      <button
        onClick={handleClearClick}
        type="button"
        className="btn btn-success my-2 mx-2"
      >
        Clear Text
      </button>
      <button
        onClick={handleCopyText}
        type="button"
        className="btn btn-danger my-2 mx-2"
      >
        CopyText
      </button>
      <button
        onClick={handleRemoveExtraSpace}
        type="button"
        className="btn btn-warning my-2 mx-2"
      >
        RemoveExtraSpaces
      </button>
      <button
        onClick={ExtractNumber}
        type="button"
        className="btn btn-info my-2 mx-2"
      >
        ExtractNum
      </button>
      <button
        onClick={ExtractText}
        type="button"
        className="btn btn-light my-2 mx-2"
      >
        ExtractText
      </button>
      <button
        onClick={ExtractEmail}
        type="button"
        className="btn btn-dark my-2 mx-2"
      >
        ExtractEmail
      </button>
      <div className="text-white mt-3">
        <h3>Your Text Summary</h3>

        <p>{text.toString().split(/\s+/).filter((val) => {
          return val.length !== 0;
        }).length} Words and {text.length} Characters</p>

        <p>{0.008 * text.toString().split(/\s+/).filter((val) => {
          return val.length !== 0;
        }).length}{" "}
          minutes to read
        </p>

        <h4>Preview</h4>
        <p>{text.length !== 0 ? text : "Enter something to preview"}</p>
      </div>
    </div>
  );
}

export default TextArea;
