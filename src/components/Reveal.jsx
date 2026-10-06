"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 55,
  duration = 0.85,
  style,
}) {
  const reduceMotion = useReducedMotion();

  const offsets = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = offsets[direction] || offsets.up;

  if (reduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}