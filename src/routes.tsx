import { createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/auth/signUp";
import SignIn from "./pages/auth/signIn";
import { Routes } from "./types/routes";
import ProtectedLayout from "./layouts/ProtectedLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Campaigns from "./pages/dashboard/campaigns/campaigns";
import Profile from "./pages/dashboard/profile/profile";
import GeneratedCampaign from "./pages/dashboard/campaigns/generated-campaign/Generated-Campaign";
import { OnboardingLayout } from "./layouts/OnboardingLayout";
import { AuthLayout } from "./layouts/AuthLayout";
import EnterUrl from "./pages/onboarding/enter-url";
import BusinessSummaries from "./pages/onboarding/business-summaries";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
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
        element: <OnboardingLayout />,
        children: [
          {
            path: Routes.EnterUrlOnboarding,
            element: <EnterUrl />,
          },
          {
            path: Routes.BusinessSummariesOnboarding,
            element: <BusinessSummaries />,
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
          {
            path: Routes.GeneratedCampaign,
            element: <GeneratedCampaign />,
          },
        ],
      },
    ],
  },
]);
