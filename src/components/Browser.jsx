import BrowserToolBar from "./BrowserToolBar";
import Application from "./Application";
import DesktopTaskBar from "./DesktopTaskBar";

export default function Browser({ setOpenBrowser }) {
  return (
    <div className=" h-full w-full rounded-2xl box-border overflow-clip">
      <BrowserToolBar setOpenBrowser={setOpenBrowser} />
      <Application />
    </div>
  );
}
