"use client";

import React, { useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  className = "",
}) => {
  // Extract number and suffix/prefix (e.g. "99.4%" -> prefix="", number=99.4, suffix="%"; "£850K+" -> prefix="£", number=850, suffix="K+")
  const match = value.match(/^([^0-9.]*)([0-9.]+)(.*)$/);

  const [displayNumber, setDisplayNumber] = useState<number>(0);
  const targetNumber = match ? parseFloat(match[2]) : 0;
  const prefix = match ? match[1] : "";
  const suffix = match ? match[3] : "";
  const isNumeric = !!match;

  useEffect(() => {
    if (!isNumeric) return;

    let start = 0;
    const duration = 750; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = start + (targetNumber - start) * easeOut;

      setDisplayNumber(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayNumber(targetNumber);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [value, targetNumber, isNumeric]);

  if (!isNumeric) {
    return <span className={className}>{value}</span>;
  }

  const formattedNumber = Number.isInteger(targetNumber)
    ? Math.round(displayNumber).toString()
    : displayNumber.toFixed(1);

  return (
    <span className={className}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
};
