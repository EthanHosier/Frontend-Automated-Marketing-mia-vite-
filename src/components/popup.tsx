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

interface PopupProps {
  content: React.ReactNode;
  trigger: React.ReactNode;
  header?: React.ReactNode;
  dismissable?: boolean;
  containerStyles?: string;
}

export const Popup: React.FC<PopupProps> = ({
  dismissable,
  content,
  header,
  containerStyles,
  trigger,
}) => {
  return (
    <>
      <div className={cn("md:hidden", containerStyles)}>
        <Drawer dismissible={dismissable}>
          <DrawerTrigger>{trigger}</DrawerTrigger>
          <DrawerContent className="gap-4">
            {dismissable && (
              <div className="mx-auto h-2 w-[100px] rounded-full bg-grayscaleSurface-default" />
            )}
            {header && <DrawerHeader>{header}</DrawerHeader>}
            {content}
          </DrawerContent>
        </Drawer>
      </div>

      <div className={cn("hidden md:block")}>
        <Dialog>
          <DialogTrigger>{trigger}</DialogTrigger>
          <DialogContent
            onInteractOutside={(e) => {
              if (!dismissable) e.preventDefault();
            }}
          >
            {dismissable && (
              <DialogClose className="absolute right-4 top-4">
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
    </>
  );
};
