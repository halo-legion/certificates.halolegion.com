import React from "react";
import { useSpring, animated } from "react-spring";
import useSound from "use-sound";
import Confetti from "react-confetti";
import Objects from "../../components/Objects";
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

        <Objects />

        <DarkModeButton onClick={toggleDarkMode} darkMode={darkMode} />
      </animated.div>
    </>
  );
}
