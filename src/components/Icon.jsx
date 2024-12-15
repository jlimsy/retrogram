import DesktopIcon from "../assets/icon.png";

export default function Icon({ setOpenBrowser }) {
  return (
    <div
      className="cursor-pointer absolute top-4 left-4 flex flex-col items-center justify-center"
      onClick={() => setOpenBrowser(true)}
    >
      <img src={DesktopIcon} className="w-16 " />
      <p className="text-xs text-gray-800">retrogram.exe</p>
    </div>
  );
}
