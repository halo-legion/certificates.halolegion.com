import React from "react";
import { useSpring, animated } from "react-spring";
import useSound from "use-sound";
import Draggable from "../../animation/Draggable";
import Confetti from "react-confetti";
import DarkModeButton from "../../components/DarkModeButton";

export default function Home() {
  const [confetti, setConfetti] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(
    JSON.parse(localStorage.getItem("darkmode")) || false
  );

  const [playOn] = useSound(
    "https://www.joshwcomeau.com/sounds/switch-on.mp3",
    { volume: 0.5 }
  );
  const [playOff] = useSound(
    "https://www.joshwcomeau.com/sounds/switch-off.mp3",
    {
      volume: 0.5,
    }
  );

  const [pop] = useSound("https://www.joshwcomeau.com/sounds/rising-pops.mp3", {
    volume: 0.5,
  });

  React.useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("darkmode")) ||
      (!("darkmode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  });

  const toggleDarkMode = () => {
    if (darkMode) {
      playOff();
    } else {
      playOn();
    }
    setDarkMode(!darkMode);
    localStorage.setItem("darkmode", JSON.stringify(!darkMode));
  };

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
    <>
      {confetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          className="z-50"
        />
      )}
      <animated.div
        className="sm:overflow-hidden sm:relative"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        style={useSpring({
          from: { transform: "scale(0)" },
          to: { transform: "scale(1)" },
        })}
      >
        <div className="flex items-center justify-center h-screen dark:bg-darkmodebg">
          <section className="absolute bottom-0 bg-indigo-500 text-white max-w-lg pt-16 pb-14 px-8 space-y-8 z-30">
            <span className="text-6xl font-vg5000">halo</span>
            <p className="text-wrap text-small font-opensans">
              <span className="font-bold text-lg">Hey,</span>
              <br />
              So we are finally here — to the end of our induction process. It
              has been quite some time with ya'll on Discord and during our
              general meetups. Although I'm not used to writing emotional
              letters, but honestly, this was a great experience with all of
              you. I saw everyone, literally everyone, do their best and try to
              make something out of nothing. It's sad and unfortunate that we
              can't induct each one of you despite your ground-breaking efforts,
              it's for sure that you're one of our future members.
              <br />
              Anyway, you can grab your certificate by signing <br /> in below.
              <br />
              <br />
              <span>❤</span> Thanks a million,
              <br />
              Utkarsh Dubey - yk who
            </p>
            <button
              className="flex justify-center items-center font-vg5000 text-xl bg-white dark:bg-darkmodebg text-primary w-full py-4"
              onClick={() => {
                setConfetti(!confetti);
                pop();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.527"
                height="23.225"
                viewBox="0 0 42.527 43.225"
                className="mr-5"
              >
                <path
                  id="Icon_awesome-google"
                  data-name="Icon awesome-google"
                  d="M42.527,22.68c0,12.331-8.444,21.107-20.915,21.107a21.612,21.612,0,1,1,0-43.225A20.784,20.784,0,0,1,36.1,6.218l-5.882,5.656c-7.7-7.425-22-1.848-22,10.3A13.538,13.538,0,0,0,21.612,35.822c8.558,0,11.765-6.135,12.27-9.316H21.612V19.072H42.188A18.946,18.946,0,0,1,42.527,22.68Z"
                  transform="translate(0 -0.563)"
                  fill="#7171fd"
                />
              </svg>
              grab your certificate
            </button>
          </section>
        </div>

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
        <DarkModeButton onClick={toggleDarkMode} darkMode={darkMode} />
      </animated.div>
    </>
  );
}
