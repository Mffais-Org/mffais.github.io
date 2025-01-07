import { useEffect, useState } from "react";

const useIsInView = (ref: React.RefObject<HTMLElement | null>, offset: number = 0): boolean => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: `-${offset}px 0px -${offset}px 0px`,
        threshold: 0.1,
      },
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, offset]);

  return isInView;
};

export default useIsInView;
