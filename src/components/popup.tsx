import { X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "./primitives/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "./primitives/drawer";
import { Button } from "./button";

interface PopupProps {
  children: React.ReactNode;
  dismissable?: boolean;
}

export const Popup: React.FC<PopupProps> = ({ children, dismissable }) => {
  return (
    <>
      <div className="md:hidden">
        <Drawer dismissible={false}>{children}</Drawer>
      </div>

      <div className="hidden md:block">
        <Dialog>{children}</Dialog>
      </div>
    </>
  );
};

interface PopupTriggerProps {
  children: React.ReactNode;
}

export const PopupTrigger: React.FC<PopupTriggerProps> = ({ children }) => {
  return (
    <>
      <DrawerTrigger className="md:hidden">{children}</DrawerTrigger>

      <DialogTrigger className="hidden md:block">{children}</DialogTrigger>
    </>
  );
};

interface PopupContentProps {
  children: React.ReactNode;
  dismissable?: boolean;
}

export const PopupContent: React.FC<PopupContentProps> = ({
  children,
  dismissable,
}) => {
  return (
    <>
      <DrawerContent className="md:hidden">
        {dismissable && (
          <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-grayscaleSurface-default" />
        )}{" "}
        {children}
      </DrawerContent>

      <DialogContent
        onInteractOutside={(e) => {
          !dismissable && e.preventDefault();
        }}
        className="hidden md:block"
        aria-label="Popup"
      >
        {dismissable && (
          <DialogClose className="absolute right-8 top-8">
            <Button variant={"outline"} size={"xl"} icon>
              <X className="size-4" />
            </Button>
          </DialogClose>
        )}
        {children}
      </DialogContent>
    </>
  );
};
