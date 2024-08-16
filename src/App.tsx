import { Button } from "./components/button";
import { Popup } from "./components/popup";

const App = () => {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <Popup
        dismissable
        header={<div>This is a header</div>}
        trigger={<Button>Yeahh</Button>}
        content={<div>This is some content</div>}
      />
    </div>
  );
};
//todo: make a popup header, and move the dialog X button to the header

export default App;
