import ReactQuill from "react-quill";
import "../quill.snow.css";
import { useState } from "react";

export default function TextEditor() {
  const [value, setValue] = useState("");

  // Modules configuration for toolbar
  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme

      [{ list: "ordered" }, { list: "bullet" }],
      ["clean"], // Button to remove formatting
    ],
  };

  console.log(value);

  return (
    <div className="m-2 shadow">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
      />
    </div>
  );
}
