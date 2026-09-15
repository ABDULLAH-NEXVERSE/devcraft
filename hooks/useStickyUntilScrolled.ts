"use client";

import { useEffect, useRef, useState } from "react";

interface UseStickyUntilScrolledOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useStickyUntilScrolled(
  containerRef: React.RefObject<HTMLElement | null>,
  options: UseStickyUntilScrolledOptions = {}
): boolean {
  const { threshold = 0.1, rootMargin = "-100px" } = options;
  const [shouldRelease, setShouldRelease] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const steps = container.querySelectorAll("[data-process-step]");
    if (steps.length === 0) return;

    const lastStep = steps[steps.length - 1] as HTMLElement;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShouldRelease(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold, rootMargin }
    );

    observerRef.current.observe(lastStep);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [containerRef, threshold, rootMargin]);

  return shouldRelease;
}
