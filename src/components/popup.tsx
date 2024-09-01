import { X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./primitives/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "./primitives/drawer";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import useWindowWidth from "@/hooks/useWindowWidth"; // Import the custom hook

interface PopupProps {
  content: React.ReactNode;
  trigger?: React.ReactNode;
  header?: React.ReactNode;
  dismissable?: boolean;
  containerStyles?: string;
  open?: boolean;
  onClose?: () => void;
}

export const Popup: React.FC<PopupProps> = ({
  dismissable,
  content,
  header,
  containerStyles,
  trigger,
  open,
  onClose,
}) => {
  const windowWidth = useWindowWidth();
  const isMdOrLarger = windowWidth >= 768; // md breakpoint in Tailwind CSS is 768px

  return (
    <>
      {/* Mobile view */}
      <div className={cn("md:hidden", containerStyles)}>
        <Drawer dismissible={dismissable} open={!!open} onClose={onClose}>
          {trigger && <DrawerTrigger>{trigger}</DrawerTrigger>}
          <DrawerContent className="gap-4">
            {dismissable && (
              <div className="mx-auto h-2 w-[100px] rounded-full bg-grayscaleSurface-default" />
            )}
            {header && <DrawerHeader>{header}</DrawerHeader>}
            {content}
          </DrawerContent>
        </Drawer>
      </div>

      {/* Desktop view (Dialog) */}
      {isMdOrLarger && (
        <div className={cn("hidden md:block")}>
          <Dialog open={!!open}>
            {trigger && <DialogTrigger>{trigger}</DialogTrigger>}
            <DialogContent
              onInteractOutside={(e) => {
                if (dismissable === false) {
                  e.preventDefault();
                  return;
                }
                onClose?.();
              }}
            >
              {dismissable !== false && (
                <DialogClose
                  className="absolute right-4 top-4"
                  onClick={onClose}
                >
                  <Button size="xl" variant="outline" icon>
                    <X className="size-4" />
                  </Button>
                </DialogClose>
              )}
              {header && <DialogHeader>{header}</DialogHeader>}
              {content}
            </DialogContent>
          </Dialog>
        </div>
      )}
    </>
  );
};
