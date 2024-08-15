import { Button } from "@/components/button";
import { Plus } from "lucide-react";

const App = () => {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <Button variant="primary" icon size={"md"}>
        <Plus />
      </Button>
    </div>
  );
};

export default App;
