import { useEffect, useRef, useState } from "react";

interface Options {
  threshold?: number;
  /** Stop observing after the first time the element becomes visible. */
  once?: boolean;
}

export function useInView<T extends Element>({ threshold = 0.12, once = true }: Options = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, inView };
}
