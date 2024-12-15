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
  const [isDeveloping, setIsDeveloping] = useState(true);

  return (
    <div className="flex flex-col h-full">
      <section className="h-content bg-white">
        <Panel
          collage={collage}
          setOpenTextEditor={setOpenTextEditor}
          openTextEditor={openTextEditor}
          setOpenFeed={setOpenFeed}
          openFeed={openFeed}
          setOpenAlbum={setOpenAlbum}
          openAlbum={openAlbum}
        />
      </section>

      <section
        className="flex-1 overflow-auto bg-[#faecc5]
"
      >
        {openFeed && (
          <div className="m-14">
            <Feed collage={collage} />
          </div>
        )}
        {openTextEditor && (
          <div className="m-14">
            <div className="h-12 m-6 flex justify-center items-center">
              <p className="text-center box-border-sm rounded-md p-2">
                You can now input &{" "}
                <span className="font-bold  bg-pink-300">format</span> your
                <span className="italic font-bold text-blue-500">
                  {" "}
                  captions
                </span>{" "}
                for <span className="underline">each</span> photo!
              </p>
            </div>
            <TextEditor
              openTextEditor
              setCollage={setCollage}
              collage={collage}
            />
          </div>
        )}

        {openAlbum && (
          <div className="flex flex-col md:grid md:grid-cols-3 h-full">
            <div className="md:col-span-1 border-y border-black bg-[#faecc5]">
              <Canvas
                collage={collage}
                isEditing={isEditing}
                openAlbum={openAlbum}
                isDeveloping={isDeveloping}
              />
            </div>
            <div className="md:col-span-2 border border-black bg-white h-full overflow-y-scroll">
              <Album
                setCollage={setCollage}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                setIsDeveloping={setIsDeveloping}
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
