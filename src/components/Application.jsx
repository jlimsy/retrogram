import Album from "./Album";
import Canvas from "./Canvas";
import Feed from "./Feed";
import Logo from "./Logo";
import Panel from "./Panel";
import TextEditor from "./TextEditor";

import { useState } from "react";

export default function Application() {
  const [collage, setCollage] = useState([]);
  const [openTextEditor, setOpenTextEditor] = useState(false);
  const [openFeed, setOpenFeed] = useState(false);
  const [openAlbum, setOpenAlbum] = useState(true);
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div className="flex flex-col ">
      <section className="h-content">
        <Panel
          setOpenTextEditor={setOpenTextEditor}
          openTextEditor={openTextEditor}
          setOpenFeed={setOpenFeed}
          openFeed={openFeed}
          setOpenAlbum={setOpenAlbum}
          openAlbum={openAlbum}
        />
      </section>

      <section className="flex-1 overflow-auto bg-[#f5e1a4]">
        {openFeed && (
          <div className="m-14">
            <Feed collage={collage} />
          </div>
        )}
        {openTextEditor && (
          <div className="m-14">
            <TextEditor openTextEditor collage={collage} />
          </div>
        )}

        {openAlbum && (
          <div className="flex flex-col md:grid md:grid-cols-3">
            <div className="md:col-span-1 border border-black bg-white overflow-auto">
              <Canvas
                setCollage={setCollage}
                collage={collage}
                isEditing={isEditing}
              />
            </div>
            <div className="md:col-span-2 border border-black bg-white">
              <Album
                setCollage={setCollage}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
