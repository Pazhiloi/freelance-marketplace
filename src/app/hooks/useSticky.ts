import { useEffect, useState } from "react";

export const useSticky = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const handleScroll = () => {
    if (window.pageYOffset > 500) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return {isSticky};
}