export default function BrowserToolBar({ setOpenBrowser }) {
  return (
    <div className="handle h-8 border-b border-black bg-ig cursor-move">
      <img
        src="https://unpkg.com/pixelarticons@1.8.1/svg/close-box.svg"
        className="w-7 h-7 p-1 ml-auto"
        onClick={() => setOpenBrowser(false)}
      />
    </div>
  );
}
