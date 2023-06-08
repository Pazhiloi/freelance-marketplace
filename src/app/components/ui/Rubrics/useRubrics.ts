import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useRubrics = (s: any) => {
const [isHome, setIsHome] = useState(true);
const { pathname } = useLocation();
useEffect(() => {
  if (pathname === "/") {
    setIsHome(true);
  } else {
    setIsHome(false);
  }
}, [pathname]);

const lastItemClassName = !isHome
  ? `color-orange ${s.lastItem}`
  : `color-orange ${s.lastItem} item__c`;


  return {
    lastItemClassName,
    isHome,
  };
}