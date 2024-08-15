import { Button } from "./components/button";

import { Popup, PopupContent, PopupTrigger } from "./components/popup";

const App = () => {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <Popup dismissable={true}>
        <PopupTrigger>
          <Button>Open Popup</Button>
        </PopupTrigger>
        <PopupContent dismissable={true}>idk</PopupContent>
      </Popup>
    </div>
  );
};
//todo: make a popup header, and move the dialog X button to the header

export default App;
