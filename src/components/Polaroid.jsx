import ReactQuill from "react-quill";
import "../quill.snow.css";
import { useState } from "react";

export default function Polaroid({
  openTextEditor,
  isEditing = false,
  url,
  caption,
}) {
  const [value, setValue] = useState({});

  console.log("url", url);

  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme

      [{ list: "ordered" }, { list: "bullet" }],
      ["clean"], // Button to remove formatting
    ],
  };

  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, caption: e }));
    console.log("e", e);
  };

  return (
    <div className="min-h-96 max-h-[400px] aspect-[3/4] rounded box-border-sm p-4 bg-white">
      <div className="aspect-square border border-black shadow-inner">
        <img src={url} className="h-full w-full object-cover" />
      </div>
      <div className="min-h-24 max-h-44 text-sm text-gray-700 mt-2 overflow-auto">
        {openTextEditor && (
          <ReactQuill
            theme="snow"
            value={value}
            onChange={(e) => handleChange(e)}
            modules={modules}
          />
        )}
        <p>{caption}</p>
      </div>
    </div>
  );
}
