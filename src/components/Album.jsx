import { useState, useEffect } from "react";
// import { Progress } from "@/components/ui/progress";

const NUM_IMAGES = 20;

export default function Album({ setCollage, setIsEditing, setIsDeveloping }) {
  // const [progress, setProgress] = useState(25);
  const [imageUrls, setImageUrls] = useState([]);

  const handleClick = (e) => {
    setIsDeveloping(true);
    setIsEditing(false);
    setCollage((prev) => [...prev, { url: e.target.src, caption: "📸" }]);

    const developingTimer = setTimeout(() => {
      setIsDeveloping(false);
    }, 3500);

    // Clean up timer
    return () => {
      clearTimeout(developingTimer);
    };
  };

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
  }, []);

  return (
    <div className="">
      <div className="flex flex-wrap">
        {imageUrls?.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index}`}
            draggable={false}
            onClick={handleClick}
            className="h-32 md:h-52 aspect-square hover:border-4 hover:border-white hover:grayscale"
          />
        ))}
      </div>
    </div>
  );
}
