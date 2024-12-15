import { useState, useEffect } from "react";
// import { Progress } from "@/components/ui/progress";

const NUM_IMAGES = 25;

export default function Album({ setCollage, setIsEditing, setIsDeveloping }) {
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
    setIsDeveloping(true);
    setIsEditing(false);
    setCollage((prev) => [...prev, { url: e.target.src, caption: "📸" }]);

    const developingTimer = setTimeout(() => {
      setIsDeveloping(false);
    }, 3500); // 350 seconds = 350000 milliseconds

    // Clean up timer
    return () => {
      clearTimeout(developingTimer);
    };
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
    const urls = [];

    for (let i = 0; i < n; i++) {
      urls.push(`https://picsum.photos/200?random=${i}`);
    }

    return urls;
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
            className="h-32 md:h-52 aspect-square hover:border-4"
          />
        ))}
      </div>
      {/* )} */}
    </div>
  );
}
