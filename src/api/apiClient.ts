import { supabase } from "@/supabase/supabaseClient";
import axios, { AxiosError } from "axios";

export const apiClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    const { data } = await supabase.auth.getSession();
    if (data?.session?.access_token) {
      config.headers["Authorization"] = `Bearer ${data.session.access_token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      supabase.auth.signOut();
    }

    return Promise.reject(error);
  }
);
