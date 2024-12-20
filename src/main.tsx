import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";
import { TanstackQueryProvider } from "./providers/TanstackQueryProvider.tsx";
import { Toaster } from "./shadcn-components/ui/sonner.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanstackQueryProvider>
      <RouterProvider router={router} />
      <Toaster />
    </TanstackQueryProvider>
  </StrictMode>
);
