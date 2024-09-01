// src/hooks/useQueryParam.js
import { useLocation } from "react-router-dom";

const useQueryParam = (paramName: string) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  return queryParams.get(paramName);
};

export default useQueryParam;
