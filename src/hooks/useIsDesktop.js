
import { useState, useEffect } from "react";

const useIsDesktop = (breakpoint = 768) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Run after mount so static render paths never touch `window`.
    const check = () => setIsDesktop(window.innerWidth >= breakpoint);
    check(); // initial run
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isDesktop;
};

export default useIsDesktop;
