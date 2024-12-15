import { useState, useEffect } from "react";
// import { Progress } from "@/components/ui/progress";

const NUM_IMAGES = 25;

export default function Album({ setCollage, setIsEditing }) {
  // const [progress, setProgress] = useState(25);
  const [imageUrls, setImageUrls] = useState([]);

  // // Handle the start event (triggered when dragging starts)
  // const handleStart = (e, data) => {
  //   console.log("Drag started", data);
  // };

  // // Handle the drag event (triggered while dragging)
  // const handleDrag = (index) => (e, data) => {
  //   console.log("Dragging", data);
  //   setPositions((prev) => ({
  //     ...prev,
  //     [index]: { x: data.x, y: data.y },
  //   }));
  // };

  const handleClick = (e) => {
    const urls = [];

    urls.push(e.target.src);
    setIsEditing(false);

    setCollage((prev) => [...prev, urls]);
  };

  // // Handle the stop event (triggered when dragging stops)
  // const handleStop = (e, data) => {
  //   const newSrc = data.node.currentSrc.replace("150", "300");

  //   console.log("Drag stopped", data, data.node, data.node.currentSrc, newSrc);

  //   const index = data.node.alt.split(" ")[1];

  //   setCollage((prev) => {
  //     const newUrls = [...prev];
  //     newUrls[index] = { url: newSrc, x: data.x, y: data.y };
  //     return newUrls;
  //   });

  //   // remove the items that were beig dragged

  //   const filteredImages = imageUrls.filter(
  //     (url) => url !== data.node.currentSrc
  //   );

  //   setImageUrls(filteredImages);
  // };
  //   console.log("imageUrls", imageUrls);

  const generateRandomImages = (n) => {
    const url = [];

    for (let i = 0; i < n; i++) {
      url.push(`https://picsum.photos/200?random=${i}`);
    }

    return url;
  };

  useEffect(() => {
    const photos = generateRandomImages(NUM_IMAGES);
    setImageUrls(photos);

    // const progressTimer1 = setTimeout(() => setProgress(50), 200);
    // const progressTimer2 = setTimeout(() => {
    //   if (photos.length === NUM_IMAGES) {
    //     setProgress(100);
    //   }
    // }, 300);

    // return () => {
    //   clearTimeout(progressTimer1);
    //   clearTimeout(progressTimer2);
    // };
  }, []);

  return (
    <div className="w-full  overflow-auto">
      {/* {progress !== 100 && (
        <div className="flex justify-center items-center h-full">
          <Progress value={progress} className="w-1/2" />{" "}
        </div>
      )} */}

      {/* {progress === 100 && ( */}
      <div className="flex flex-wrap">
        {imageUrls?.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index}`}
            draggable={false}
            onClick={handleClick}
            className="h-32 md:h-52 aspect-square"
          />
        ))}
      </div>
      {/* )} */}
    </div>
  );
}
