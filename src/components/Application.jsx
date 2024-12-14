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
    <>
      <Logo />

      <Panel
        setOpenTextEditor={setOpenTextEditor}
        openTextEditor={openTextEditor}
        setOpenFeed={setOpenFeed}
        openFeed={openFeed}
        setOpenAlbum={setOpenAlbum}
        openAlbum={openAlbum}
      />
      {openFeed ? (
        <Feed />
      ) : (
        <div>
          <div>
            <Canvas setCollage={setCollage} collage={collage} />
            {openTextEditor || (
              <div className="w-full">
                <Album setCollage={setCollage} />
              </div>
            )}
          </div>

          {openTextEditor && <TextEditor />}
        </div>
      )}
    </>
  );
}
