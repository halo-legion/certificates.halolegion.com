import React from "react";
import { useSpring, animated } from "react-spring";
import useSound from "use-sound";
import Objects from "../../components/Objects";
import DarkModeButton from "../../components/DarkModeButton";

const events = [
  { id: 1, name: "coding" },
  { id: 2, name: "designing" },
  { id: 3, name: "gaming" },
  { id: 4, name: "pitching" },
  { id: 5, name: "writing" },
  { id: 6, name: "quizzing" },
];

export default function Certificate() {
  const [darkMode, setDarkMode] = React.useState(
    JSON.parse(localStorage.getItem("darkmode")) || false
  );

  const [selectedEvent, setSelectedEvent] = React.useState(events[0]);

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
      <animated.div
        className="sm:overflow-hidden sm:relative"
        style={useSpring({
          from: { transform: "scale(0)" },
          to: { transform: "scale(1)" },
        })}
      >
        <div className="flex items-center justify-center h-screen dark:bg-darkmodebg text-primary z-30">
          <section>
            <h1 className="text-4xl sm:text-6xl text-opensans font-extrabold">
              Hi! Utkarsh
            </h1>
            <div className="my-4 flex flex-col">
              <span className="text-xl dark:text-white">
                Select your event:
              </span>
              <select
                value={selectedEvent}
                className="dark:bg-gray-700 bg-white border-2 border-primary px-4 py-2 my-2 rounded-lg capitalize focus:outline-none shadow-2xl"
                onChange={(e) => {
                  setSelectedEvent(e.target.value);
                }}
              >
                {events.map((event) => (
                  <option value={event.name} key={event.id}>
                    {event.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="my-4">
              <button className="bg-darkblue-gradient px-10 py-6 text-white rounded-2xl w-full focus:outline-none focus:ring focus:ring-primary">
                Download Certificate
              </button>
            </div>
          </section>
        </div>
        <Objects />
        <DarkModeButton onClick={toggleDarkMode} darkMode={darkMode} />
      </animated.div>
    </>
  );
}
