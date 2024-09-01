import { isAxiosError } from "axios";
import { useState } from "react";

interface ErrorHandler {
  hasError: boolean;
  errorMessage?: string;
  errorHandler: (error: unknown) => void;
  onClose: () => void;
}

const generateErrorMessage = (error: unknown): string => {
  if (isAxiosError(error)) {
    const serverError = error.response?.data as ServerError | undefined;
    return serverError?.error || error.message;
  }

  return "If problem persists, please contact the Mia team.";
};

export const useQueryErrorHandler = (): ErrorHandler => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const errorHandler = (error: unknown) => {
    const err = generateErrorMessage(error);
    setErrorMessage(err);
    setHasError(true);
  };

  const onClose = () => setHasError(false);

  return { hasError, errorMessage, errorHandler, onClose };
};

type ServerError = {
  error: string;
};
