import React, { useState } from "react";
import Spectrum from "react-spectrum";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lines, setLines] = useState(3)

  return (
    <div class="wrapper">
      <button class="open" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? "Open me" : "Close me"}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.main
            style={{ overflow: 'hidden' }}
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 1 }}
          >
            <Spectrum
              linesPerParagraph={lines > 1 ? lines : 1} 
              width={500}
              colors={["#757575", "#aa9999", "#0871F2", "#BF5AF2"]}
            />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
