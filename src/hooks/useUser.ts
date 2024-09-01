import { supabase } from "@/supabase/supabaseClient";
import { User } from "@supabase/supabase-js";
import { useState, useEffect, useCallback } from "react";

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);

  // Fetch user only once when the component mounts
  const fetchUser = useCallback(async () => {
    const { data } = await supabase.auth.getUser();
    setUser(data?.user || null);
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return { user };
};
