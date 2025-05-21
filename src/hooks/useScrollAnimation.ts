import { useEffect, RefObject } from "react";

/**
 * A hook that adds a visible class to elements when they enter the viewport
 */
const useScrollAnimation = (
  ref: RefObject<HTMLElement>,
  threshold: number = 0.1
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          ref.current.classList.add("visible");
          // Once the animation is triggered, we can stop observing
          observer.unobserve(ref.current);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold]);
};

export default useScrollAnimation;
