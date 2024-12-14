import { Button } from "./ui/button";

export default function Panel({
  setOpenTextEditor,
  openTextEditor,
  setOpenFeed,
  openFeed,
  setOpenAlbum,
  openAlbum,
}) {
  return (
    <div className="flex m-2 justify-between">
      <div className={`flex-1 ${openTextEditor ? "block" : "hidden"}`}>
        <Button onClick={() => setOpenTextEditor(false)}>Previous</Button>
      </div>

      <div className="ml-auto ">
        <Button
          className={`${openAlbum ? "block" : "hidden"}`}
          onClick={() => {
            setOpenTextEditor(true);
            setOpenAlbum(false);
          }}
        >
          Next
        </Button>
        <Button
          className={`${openTextEditor ? "block" : "hidden"}`}
          onClick={() => {
            setOpenTextEditor(false);
            setOpenFeed(true);
          }}
        >
          Post
        </Button>
        <Button
          className={`${openFeed ? "block" : "hidden"}`}
          onClick={() => {
            openAlbum(true);
            openFeed(false);
          }}
        >
          New
        </Button>
      </div>
    </div>
  );
}
