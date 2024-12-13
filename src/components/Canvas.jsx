export default function Canvas({ setCollage, collage }) {
  console.log("collage", collage);
  return (
    <div className="h-96 border border-black">
      {collage?.map((item, index) => (
        <img
          key={index}
          src={item.url}
          className={`absolute top-${item.y} left-${item.x}`}
        />
      ))}
    </div>
  );
}
