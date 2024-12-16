import Browser from "./Browser";
import DesktopTaskBar from "./DesktopTaskBar";
import Draggable from "react-draggable";
import Icon from "./Icon";
import { useState, useEffect } from "react";
import Instructions from "./Instructions";

export default function Main() {
  const [openBrowser, setOpenBrowser] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [position, setPosition] = useState({
    x: (window.innerWidth - window.innerWidth * 0.75) / 2,
    y: (window.innerHeight - window.innerHeight * 0.75) / 2,
  });

  // Resize window function

  useEffect(() => {
    const resizeWindow = () => {
      const newWidth = window.innerWidth * 0.75;
      const newHeight = window.innerHeight * 0.75;

      setWindowSize({
        width: newWidth,
        height: newHeight,
      });

      // Update position to keep Browser centered
      setPosition({
        x: window.innerWidth / 2 - newWidth / 2,
        y: window.innerHeight / 2 - newHeight / 2,
      });
    };

    window.addEventListener("resize", resizeWindow);
    resizeWindow();

    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  console.log("windowSize", windowSize, position);

  // Handle the start event (triggered when dragging starts)
  const handleStart = (e, data) => {
    console.log("Drag started", data);
  };

  // Handle the drag event (triggered while dragging)
  const handleDrag = (e, data) => {
    console.log("Dragging", data);
    setPosition({ x: data.x, y: data.y });
  };

  // Handle the stop event (triggered when dragging stops)
  const handleStop = (e, data) => {
    console.log("Drag stopped", data);
  };
  return (
    <div className="h-screen bg-blue-300 bg-[url('/plaid.png')] bg-cover bg-no-repeat bg-center object-fit">
      <header className="w-full fixed bottom-0 bg-gray-400 border-t border-l border-r-4 border-b-4 border-b-gray-500">
        <DesktopTaskBar />
      </header>
      <Icon setOpenBrowser={setOpenBrowser} />
      <Draggable
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={position}
        grid={[1, 1]}
        scale={1}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
        bounds="parent"
      >
        <main
          className="w-3/4 aspect-[3/4] md:aspect-video absolute z-200 "
          style={{
            width: windowSize.width,
            height: windowSize.height,
          }}
        >
          {openBrowser && <Browser setOpenBrowser={setOpenBrowser} />}{" "}
        </main>
      </Draggable>
      {/* <div className="relative z-0 ">
        <Instructions />
      </div> */}
    </div>
  );
}
