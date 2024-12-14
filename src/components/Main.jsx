import Browser from "./Browser";
import DesktopTaskBar from "./DesktopTaskBar";
import Draggable from "react-draggable";
import { useState } from "react";

export default function Main() {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2 - (window.innerWidth * 0.75) / 2, // Adjust based on element width
    y: window.innerHeight / 2 - (window.innerHeight * 0.75) / 2, // Adjust based on element height
  });
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
    <>
      <header>
        <DesktopTaskBar />
      </header>
      <Draggable
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={position}
        grid={[1, 1]}
        scale={1}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
      >
        <main className="w-3/4 aspect-[3/4] md:aspect-video absolute  ">
          <Browser />
        </main>
      </Draggable>
    </>
  );
}
