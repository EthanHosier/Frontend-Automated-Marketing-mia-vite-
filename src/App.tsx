import Blob from "./components/blob";
import { HStack } from "./components/hstack";

const App = () => {
  return (
    <div className="flex w-screen h-screen items-center justify-center bg-grayscaleSurface-default">
      <Blob padding={12} paddingDesktop={32}></Blob>
    </div>
  );
};

export default App;
