import BrowserToolBar from "./BrowserToolBar";
import Application from "./Application";

export default function Browser() {
  return (
    <div className="h-full w-full rounded-2xl box-border overflow-auto">
      <BrowserToolBar />
      <Application />
    </div>
  );
}
