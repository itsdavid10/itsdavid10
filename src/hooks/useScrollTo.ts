import { useCallback } from "react";

/**
 * A hook that provides a function to smoothly scroll to an element
 */
const useScrollTo = (elementId: string) => {
  const scrollToElement = useCallback(() => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [elementId]);

  return scrollToElement;
};

export default useScrollTo;
