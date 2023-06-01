import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useHistoryWorks = () => {
  const [isHistory, setIsHistory] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/history") {
      setIsHistory(true);
    } else {
      setIsHistory(false);
    }
  }, [pathname]);

  return {isHistory}
}