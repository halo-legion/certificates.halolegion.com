import React from "react";
import Draggable from "../animation/Draggable";
import { useSpring, animated } from "react-spring";

export default function Objects() {
  const calc = (x, y) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];

  const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
  const trans2 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

  const [animation, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <div onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <div className="sm:contents hidden">
        <div className="absolute left-0 top-0 transform -translate-x-1/3 -translate-y-1/2">
          <animated.svg
            xmlns="http://www.w3.org/2000/svg"
            width="1000"
            height="1000"
            viewBox="0 0 859 859"
            style={{ transform: animation.xy.interpolate(trans1) }}
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="0.5"
                x2="0.5"
                y2="1"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#4facfe" />
                <stop offset="1" stopColor="#00f2fe" />
              </linearGradient>
            </defs>
            <g
              id="Group_5"
              data-name="Group 5"
              transform="translate(-662 -306)"
            >
              <g
                id="Group_3"
                data-name="Group 3"
                transform="translate(662 306)"
              >
                <circle
                  id="Ellipse_4"
                  data-name="Ellipse 4"
                  cx="429.5"
                  cy="429.5"
                  r="429.5"
                  fill="url(#linear-gradient)"
                />
                <circle
                  id="Ellipse_3"
                  data-name="Ellipse 3"
                  cx="255.5"
                  cy="255.5"
                  r="255.5"
                  transform="translate(174 174)"
                  className="fill-lightmodebg dark:fill-darkmodebg"
                />
              </g>
            </g>
          </animated.svg>
        </div>
        <div className="absolute right-0 top-0 transform -translate-x-3/4 translate-y-1/2">
          <Draggable>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 135.256 135.256"
              className="hover:animate-bounce"
            >
              <defs>
                <linearGradient
                  id="linear-gradient-3"
                  x1="0.5"
                  x2="0.5"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stopColor="#6a11cb" />
                  <stop offset="1" stopColor="#2575fc" />
                </linearGradient>
              </defs>
              <g
                id="Group_6"
                data-name="Group 6"
                transform="matrix(0.848, 0.53, -0.53, 0.848, -717.61, -702.6)"
              >
                <rect
                  id="Rectangle_4"
                  data-name="Rectangle 4"
                  width="98.156"
                  height="98.156"
                  transform="translate(1025 188)"
                  fill="url(#linear-gradient-3)"
                />
                <rect
                  id="Rectangle_5"
                  data-name="Rectangle 5"
                  width="43.867"
                  height="43.867"
                  transform="translate(1052.322 215.101)"
                  className="fill-lightmodebg dark:fill-darkmodebg"
                />
              </g>
            </svg>
          </Draggable>
        </div>
        <div className="absolute left-0 bottom-0 transform translate-x-3/4 -translate-y-1/2">
          <Draggable>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="193.645"
              height="193.645"
              viewBox="0 0 193.645 193.645"
            >
              <defs>
                <linearGradient
                  id="linear-gradient-4"
                  x1="0.5"
                  x2="0.5"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stopColor="#ff0844" />
                  <stop offset="1" stopColor="#ffb199" />
                </linearGradient>
              </defs>
              <g
                id="Group_8"
                data-name="Group 8"
                transform="matrix(0.848, 0.53, -0.53, 0.848, -695.155, -702.6)"
              >
                <rect
                  id="Rectangle_4"
                  data-name="Rectangle 4"
                  width="140.529"
                  height="140.529"
                  transform="translate(1025 188)"
                  fill="url(#linear-gradient-4)"
                />
                <rect
                  id="Rectangle_5"
                  data-name="Rectangle 5"
                  width="62.804"
                  height="62.804"
                  transform="translate(1064.117 226.801)"
                  className="fill-lightmodebg dark:fill-darkmodebg"
                />
              </g>
            </svg>
          </Draggable>
        </div>
        <div className="absolute right-0 bottom-0 transform translate-x-1/3 translate-y-1/2 z-40">
          <animated.svg
            xmlns="http://www.w3.org/2000/svg"
            width="940"
            height="940"
            viewBox="0 0 940 940"
            style={{ transform: animation.xy.interpolate(trans2) }}
          >
            <defs>
              <linearGradient
                id="linear-gradient-2"
                x1="0.5"
                x2="0.5"
                y2="1"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#ff0844" />
                <stop offset="1" stopColor="#ffb199" />
              </linearGradient>
            </defs>
            <g
              id="Group_7"
              data-name="Group 7"
              transform="translate(-525 -399.412)"
            >
              <g
                id="Group_3"
                data-name="Group 3"
                transform="translate(525 399)"
              >
                <circle
                  id="Ellipse_4"
                  data-name="Ellipse 4"
                  cx="470"
                  cy="470"
                  r="470"
                  transform="translate(0 0.412)"
                  fill="url(#linear-gradient-2)"
                />
                <circle
                  id="Ellipse_3"
                  data-name="Ellipse 3"
                  cx="279.5"
                  cy="279.5"
                  r="279.5"
                  transform="translate(191 190.412)"
                  className="fill-lightmodebg dark:fill-darkmodebg"
                />
              </g>
            </g>
          </animated.svg>
        </div>
      </div>
    </div>
  );
}
