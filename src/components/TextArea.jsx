import React, { useState } from "react";

function TextArea(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setText(value);
  }

  function handleUpClick() {
    const value = text.toUpperCase();
    setText(value);
    props.func("Converted To Upper Case");
  }
  function handleLoClick() {
    const value = text.toLowerCase();
    setText(value);
    props.func("Converted To Lower Case");
  }
  function handleClearClick() {
    const value = "";
    setText(value);
    props.func("Cleared");
  }
  function handleCopyText() {
    const val1 = document.getElementById("my-box");
    val1.select();
    navigator.clipboard.writeText(val1.value);
    props.func("Copy To Clipboard");
  }
  function handleRemoveExtraSpace() {
    const val = document.getElementById("my-box");
    const ans = val.value.replace(/\s+/g, " ");
    setText(ans);
    props.func("Extra Spaces Removed");
  }

  function ExtractNumber() {
    const val = document.getElementById("my-box");
    const ans = val.value.match(/\d/g);
    if (ans) {
      ans.join("");
    }
    setText(ans);
    props.func("Number Extracted");
  }
  function ExtractText() {
    const val = document.getElementById("my-box");
    const ans = val.value.replace(/\d/g, "");
    setText(ans);
    props.func("Text Extracted");
  }
  function ExtractEmail() {
    const val = document.getElementById("my-box");
    const email = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const ans = val.value.match(email);
    setText(ans);
    props.func("Email Extracted");
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

        <p>
          {text && (text.length === 0 ? 0 : text.toString().split(" ").length)}{" "}
          Words and {text && text.length} Characters
        </p>

        <p>
          {text &&
            (text.length === 0
              ? 0
              : 0.008 * text.toString().split(" ").length)}{" "}
          minutes to read
        </p>

        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default TextArea;
