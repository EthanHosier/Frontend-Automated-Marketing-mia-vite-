import React from "react";
import { Popup } from "../popup";
import { VStack } from "../vstack";
import Text from "../text";

interface ErrorModalProps {
  open: boolean;
  onClose: () => void;
  errorMessage?: string;
}

const ErrorModal: React.FC<ErrorModalProps> = ({
  open,
  onClose,
  errorMessage,
}) => {
  return (
    <Popup
      header={
        <VStack>
          <Text size="h4" variant="bold" className="Poppins">
            Oops! Something went wrong
          </Text>
          <Text size="subtitle" color="text-grayscaleText-subtitle">
            {errorMessage}
          </Text>
        </VStack>
      }
      content={<></>}
      open={open}
      onClose={onClose}
      dismissable
    />
  );
};

export default ErrorModal;
