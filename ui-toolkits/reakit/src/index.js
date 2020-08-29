import React from "react";
import ReactDOM from "react-dom";
import { useDialogState, Dialog, DialogDisclosure } from "reakit/Dialog";
import { useTabState, Tab, TabList, TabPanel } from "reakit/Tab";

export default function App() {
  const dialog = useDialogState();
  const tab = useTabState();
  return (
    <>
      <DialogDisclosure {...dialog}>Open dialog</DialogDisclosure>
      <Dialog {...dialog} aria-label="Welcome Modal">
        I am a modal
      </Dialog>
      <TabList {...tab} aria-label="My tabs">
        <Tab {...tab} stopId="tab1">
          Tab 1
        </Tab>
        <Tab {...tab} stopId="tab2">
          Tab 2
        </Tab>
        <Tab {...tab} stopId="tab3">
          Tab 3
        </Tab>
      </TabList>
      <TabPanel {...tab} stopId="tab1">
        Tab 1
      </TabPanel>
      <TabPanel {...tab} stopId="tab2">
        Tab 2
      </TabPanel>
      <TabPanel {...tab} stopId="tab3">
        Tab 3
      </TabPanel>
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
