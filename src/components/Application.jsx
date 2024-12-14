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

  return (
    <div className="flex flex-col">
      <section className="h-content">
        <Logo />
        <Panel
          setOpenTextEditor={setOpenTextEditor}
          openTextEditor={openTextEditor}
          setOpenFeed={setOpenFeed}
          openFeed={openFeed}
          setOpenAlbum={setOpenAlbum}
          openAlbum={openAlbum}
        />
      </section>

      <section className="flex-1 overflow-auto">
        {openFeed ? (
          <Feed />
        ) : (
          <div className="flex flex-rows-2">
            <div className="h-96">
              <Canvas setCollage={setCollage} collage={collage} />
            </div>
            <div className="flex-1">
              {openTextEditor || <Album setCollage={setCollage} />}
              {openTextEditor && <TextEditor />}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
