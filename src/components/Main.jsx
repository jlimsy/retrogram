import Browser from "./Browser";

export default function Main() {
  return (
    <div className="w-3/4 aspect-[3/4] md:aspect-video shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Browser />
    </div>
  );
}
