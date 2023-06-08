import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useReviews = (s: any) => {
  const [isChecked, setIsChecked] = useState("pos");
  const [isWork, setIsWork] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/work") {
      setIsWork(true);
    } else {
      setIsWork(false);
    }
  }, [pathname]);

  const positiveClassName =
    isChecked === "pos" ? `${s.tab} ${s.green}` : `${s.tab}`;

  const negativeClassName =
    isChecked === "neg" ? `${s.tab} ${s.green}` : `${s.tab}`;

  const itemsClassName = !isWork ? `${s.items}` : `${s.blocks}`;   

  return {
    positiveClassName,
    negativeClassName,
    itemsClassName,
    isWork,
  };


}