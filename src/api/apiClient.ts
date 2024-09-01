import { supabase } from "@/supabase/supabaseClient";
import axios, { AxiosError } from "axios";

export const apiClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      supabase.auth.signOut();
    }

    return Promise.reject(error);
  }
);
