import useSession from "@/hooks/useSession";
import { Outlet } from "react-router-dom";

export const ProtectedLayout = () => {
  const { session, loading } = useSession();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Not authenticated</div>;
  }

  console.log(session);
  return <Outlet />;
};

export default ProtectedLayout;
