import React from "react";
import ReactDOM from "react-dom";
import { useDialogState, Dialog, DialogDisclosure } from "reakit/Dialog";

export default function App() {
  const dialog = useDialogState();

  return (
    <>
      <DialogDisclosure {...dialog}>Open dialog</DialogDisclosure>
      <Dialog {...dialog} aria-label="Welcome Modal">
        I am a modal
      </Dialog>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
