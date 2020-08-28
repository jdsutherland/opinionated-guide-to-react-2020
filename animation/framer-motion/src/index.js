import React, { useState } from "react";
import Spectrum from "react-spectrum";
import ReactDOM from "react-dom";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lines, setLines] = useState(3)

  return (
    <div class="wrapper">
      <button class="open" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? "Open me" : "Close me"}
      </button>
      {isOpen && (
        <main style={{ overflow: "hidden" }}>
          <Spectrum
            linesPerParagraph={lines > 1 ? lines : 1}
            width={500}
            colors={["#757575", "#999999", "#0871F2", "#BF5AF2"]}
          />
        </main>
      )}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
