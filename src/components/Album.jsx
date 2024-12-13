import { useState, useEffect } from "react";
import Draggable from "react-draggable";

const NUM_IMAGES = 15;

export default function Album({ setCollage }) {
  const [imageUrls, setImageUrls] = useState([]);
  const [positions, setPositions] = useState({});

  // Handle the start event (triggered when dragging starts)
  const handleStart = (e, data) => {
    console.log("Drag started", data);
  };

  // Handle the drag event (triggered while dragging)
  const handleDrag = (index) => (e, data) => {
    console.log("Dragging", data);
    setPositions((prev) => ({
      ...prev,
      [index]: { x: data.x, y: data.y },
    }));
  };

  console.log(positions);

  // Handle the stop event (triggered when dragging stops)
  const handleStop = (e, data) => {
    const newSrc = data.node.currentSrc.replace("150", "300");

    console.log("Drag stopped", data, data.node, data.node.currentSrc, newSrc);

    // const index = data.node.alt.split(" ")[1];
    // console.log("index", index);

    // setCollage((prev) => {
    //   const newUrls = [...prev];
    //   newUrls[index] = { url: newSrc, x: data.x, y: data.y };
    //   return newUrls;
    // });
  };
  //   console.log("imageUrls", imageUrls);

  const generateRandomImages = (n) => {
    const url = [];

    for (let i = 0; i < n; i++) {
      url.push(`https://picsum.photos/150?random=${i}`);
    }

    return url;
  };

  useEffect(() => {
    setImageUrls(generateRandomImages(NUM_IMAGES));

    // console.log(initialPositions);
    // setPositions(initialPositions);
  }, []);

  return (
    <div className="grid grid-cols-3 lg:grid-cols-5 w-fit ">
      {imageUrls?.map((url, index) => (
        <Draggable
          key={index}
          defaultPosition={{ x: 0, y: 0 }}
          position={positions[index] || { x: 0, y: 0 }}
          grid={[1, 1]}
          scale={1}
          onStart={handleStart}
          onDrag={handleDrag(index)} // Pass index to track positions per image
          onStop={handleStop}
        >
          <img
            key={index}
            src={url}
            alt={`Image ${index}`}
            className="cursor-grab"
            draggable={false}
          />
        </Draggable>
      ))}
    </div>
  );
}

// <Draggable
//   //   axis="x"
//   //   handle=".handle"
//   defaultPosition={{ x: 0, y: 0 }}
//   position={position}
//   grid={[1, 1]}
//   scale={1}
//   onStart={handleStart}
//   onDrag={handleDrag}
//   onStop={handleStop}
// >
//   <div className="h-[400px] w-[500px] rounded-lg border border-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

//   </div>
// </Draggable>
