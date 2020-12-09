import React from "react";

import { useSpring, animated } from "react-spring";
import { useGesture } from "react-with-gesture";

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

export default function Draggable({ props, children }) {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 8);
    set({
      xy: down ? delta : [0, 0],
      config: { mass: velocity, tension: 500 * velocity, friction: 50 },
    });
  });
  return (
    <animated.div
      {...bind()}
      style={{
        transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
      }}
      className="cursor-draggable"
    >
      {children}
    </animated.div>
  );
}
