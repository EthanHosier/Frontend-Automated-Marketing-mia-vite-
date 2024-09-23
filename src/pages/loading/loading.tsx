import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-white absolute top-0 left-0">
      <Loader2
        size={72}
        className="text-primary-surface-default animate-spin"
      />
    </div>
  );
};

export default Loading;
