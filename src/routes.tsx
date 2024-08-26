import { createBrowserRouter } from "react-router-dom";
import { AuthOnboardingLayout } from "./layouts/AuthOnboardingLayout";
import SignUp from "./pages/auth/signUp";
import SignIn from "./pages/auth/signIn";
import { Routes } from "./types/routes";
import Onboarding from "./pages/onboarding/onboarding";
import ProtectedLayout from "./layouts/ProtectedLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Campaigns from "./pages/dashboard/campaigns/campaigns";
import Profile from "./pages/dashboard/profile/profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthOnboardingLayout />,
    children: [
      {
        path: Routes.SignUp,
        element: <SignUp />,
      },
      {
        path: Routes.SignIn,
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedLayout />,
    children: [
      {
        path: Routes.Onboarding,
        element: <AuthOnboardingLayout />,
        children: [
          {
            path: Routes.Onboarding,
            element: <Onboarding />,
          },
        ],
      },
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          {
            path: Routes.Campaigns,
            element: <Campaigns />,
          },
          {
            path: Routes.Profile,
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);
