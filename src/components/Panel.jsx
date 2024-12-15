import { Button } from "./ui/button";
import Logo from "./Logo";

export default function Panel({
  collage,
  setOpenTextEditor,
  openTextEditor,
  setOpenFeed,
  openFeed,
  setOpenAlbum,
  openAlbum,
}) {
  return (
    <div className="grid grid-cols-3 m-2 px-4">
      <div className="flex items-center">
        <Button
          size="sm"
          alt="previous"
          variant="ghost"
          className={`${openTextEditor ? "inline-block" : "hidden"}`}
          onClick={() => {
            setOpenTextEditor(false);
            setOpenAlbum(true);
          }}
        >
          <img
            src="https://unpkg.com/pixelarticons@1.8.1/svg/arrow-left.svg"
            className="h-8 w-8"
          />
        </Button>
      </div>

      <div>
        <Logo />
      </div>

      <div className="flex items-center justify-end gap-4">
        {collage.length > 0 && (
          <Button
            alt="next"
            size="sm"
            variant="ghost"
            className={`${openAlbum ? "inline-block" : "hidden"}`}
            onClick={() => {
              setOpenTextEditor(true);
              setOpenAlbum(false);
            }}
          >
            <img
              src="https://unpkg.com/pixelarticons@1.8.1/svg/arrow-right.svg"
              className="h-8 w-8"
            />
          </Button>
        )}

        <Button
          alt="post"
          size="sm"
          variant="ghost"
          className={`${openTextEditor ? "inline-block" : "hidden"}`}
          onClick={() => {
            setOpenFeed(true);
            setOpenAlbum(false);
            setOpenTextEditor(false);
          }}
        >
          <img
            src="https://unpkg.com/pixelarticons@1.8.1/svg/check-double.svg"
            className="h-8 w-8"
          />
        </Button>
        <Button
          alt="add"
          size="sm"
          variant="ghost"
          className={`${openFeed ? "block" : "hidden"} `}
          onClick={() => {
            setOpenAlbum(true);
            setOpenTextEditor(false);
            setOpenFeed(false);
          }}
        >
          <img
            src="https://unpkg.com/pixelarticons@1.8.1/svg/image-plus.svg"
            className="h-8 w-8"
          />
        </Button>
      </div>
    </div>
  );
}
