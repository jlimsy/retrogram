import Album from "./Album";
import Canvas from "./Canvas";
import Logo from "./Logo";
import Panel from "./Panel";
import TextEditor from "./TextEditor";
import { useState } from "react";

export default function Browser() {
  const [collage, setCollage] = useState([]);
  const [openTextEditor, setOpenTextEditor] = useState(false);

  return (
    <div className="h-full w-full border border-black overflow-auto">
      <Logo />
      <Panel
        setOpenTextEditor={setOpenTextEditor}
        openTextEditor={openTextEditor}
      />
      <Canvas setCollage={setCollage} collage={collage} />
      {openTextEditor || (
        <div className="w-full">
          <Album setCollage={setCollage} />
        </div>
      )}
      {openTextEditor && <TextEditor />}
    </div>
  );
}
