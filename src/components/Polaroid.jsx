export default function Polaroid() {
  return (
    <div className="h-96 aspect-[3/4] rounded box-border-sm p-4">
      <div className=" border border-black shadow-inner">
        <img src="https://picsum.photos/300" />
      </div>
      <div className="h-24 text-sm text-gray-700 mt-2 overflow-auto">
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Enim nisl
          vestibulum mus sit efficitur? Penatibus interdum semper posuere
          vivamus cursus cubilia netus. Tincidunt senectus tempus quis
          condimentum cursus enim sapien lectus. Pulvinar odio nascetur ligula
          cursus placerat.
        </p>
      </div>
    </div>
  );
}
