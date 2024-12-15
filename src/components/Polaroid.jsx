import ReactQuill from "react-quill";
import "../quill.snow.css";
import { useState } from "react";

export default function Polaroid({
  collage,
  setCollage,
  openTextEditor,
  isEditing = false,
  url,
  caption,
  openAlbum,
}) {
  const [value, setValue] = useState("📸");

  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme

      ["clean"], // Button to remove formatting
    ],
  };

  const handleChange = (e) => {
    const updatedCollage = collage.map((item) => {
      if (item.url === url) {
        return { ...item, caption: e };
      }
      return item;
    });

    setCollage(updatedCollage);
    setValue(e);
  };

  return (
    <div
      className={`h-96 lg:h-[400px] ${
        openTextEditor && "h-[400px]"
      } aspect-[3/4] rounded box-border-sm p-4 bg-white`}
    >
      <div className="aspect-square border border-black shadow-inner">
        <img
          src={url}
          className={`h-full w-full object-cover ${
            openAlbum && "animate-develop"
          }`}
        />
      </div>
      <div className="min-h-24 max-h-44 text-sm text-gray-700 mt-2 overflow-auto">
        {openTextEditor && (
          <ReactQuill
            theme="snow"
            value={value}
            onChange={(e) => handleChange(e)}
            onFocus={() => setValue("")}
            modules={modules}
          />
        )}
        <div
          className="text-gray-700 mt-2 text-wrap"
          dangerouslySetInnerHTML={{ __html: caption }}
        ></div>{" "}
      </div>
    </div>
  );
}
