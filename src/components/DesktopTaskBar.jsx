export default function DesktopTaskBar() {
  return (
    <div className="h-10 flex justify-end items-center gap-4 mr-4">
      <a href="https://github.com/jlimsy/retrogram" target="_blank">
        <img
          src="https://unpkg.com/pixelarticons@1.8.1/svg/github.svg"
          className="w-6 h-6 "
        />
      </a>
      <img
        src="https://unpkg.com/pixelarticons@1.8.1/svg/battery-2.svg"
        className="w-6 h-6 "
      />
    </div>
  );
}
