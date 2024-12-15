import BrowserToolBar from "./BrowserToolBar";

export default function Instructions() {
  return (
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
      <div className="h-96 w-96 bg-white rounded-2xl box-border ">
        <BrowserToolBar />
        How to navigate the website:
      </div>
    </Draggable>
  );
}
