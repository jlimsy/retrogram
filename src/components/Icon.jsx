export default function Icon({ setOpenBrowser }) {
  return (
    <div
      className="fixed flex flex-col items-center justify-center"
      onClick={() => setOpenBrowser(true)}
    >
      <img src="src/assets/logo.png" className="w-16" />
      <p className="text-xs">retrogram.exe</p>
    </div>
  );
}
