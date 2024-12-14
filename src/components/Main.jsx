import Browser from "./Browser";
import DesktopTaskBar from "./DesktopTaskBar";

export default function Main() {
  return (
    <>
      <header>
        <DesktopTaskBar />
      </header>
      <main className="w-3/4 aspect-[3/4] md:aspect-video absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <Browser />
      </main>
    </>
  );
}
