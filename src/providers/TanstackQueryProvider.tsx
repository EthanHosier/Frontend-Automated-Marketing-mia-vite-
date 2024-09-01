import ErrorModal from "@/components/common/error-modal";
import { useQueryErrorHandler } from "@/hooks/useTanstackErrorHandler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren, useMemo } from "react";

export const TanstackQueryProvider = ({ children }: PropsWithChildren) => {
  const { hasError, errorHandler, errorMessage, onClose } =
    useQueryErrorHandler();

  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
            staleTime: 60 * 1000,
          },
          mutations: {
            onError: errorHandler,
          },
        },
      }),
    [errorHandler]
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ErrorModal
        open={hasError}
        onClose={onClose}
        errorMessage={errorMessage}
      />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
