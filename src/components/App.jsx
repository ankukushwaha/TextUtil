import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TextArea from "./TextArea";
import Alert from "./Alert";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [toggleMode, setToggleMode] = useState("light");

  const [alert, setAlert] = useState(null);

  function showAlert(text) {
    setAlert(text);
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  function ToggleRed() {
    if (toggleMode === "light") {
      setToggleMode("dark");
      document.body.style.backgroundColor = "#7c2222e3";
    } else {
      setToggleMode("light");
      document.body.style.backgroundColor = "#494848";
    }
  }

  function ToggleGreen() {
    if (toggleMode === "light") {
      setToggleMode("dark");
      document.body.style.backgroundColor = "#256855c4";
    } else {
      setToggleMode("light");
      document.body.style.backgroundColor = "#494848";
    }
  }

  function ToggleBlue() {
    if (toggleMode === "light") {
      setToggleMode("dark");
      document.body.style.backgroundColor = "rgb(4 48 72)";
    } else {
      setToggleMode("light");
      document.body.style.backgroundColor = "#494848";
    }
  }

  return (
    <Router>
      <div>
        <Header
          red={ToggleRed}
          green={ToggleGreen}
          blue={ToggleBlue}
          mode={toggleMode}
        />
        <Alert alert={alert} />

        <Routes>
          <Route path="/about"
           element =  {<About />} />
          <Route path="/"
            element = {<TextArea mode={toggleMode} func={showAlert} />} />
        </Routes>

        <Footer mode={toggleMode} />
      </div>
    </Router>
  );
}

export default App;
