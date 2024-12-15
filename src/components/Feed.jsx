import Polaroid from "./Polaroid";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const users = [
  { name: "john_doe_vibes", avatar: "/avatar.png" },
  { name: "jane_jams_90s", avatar: "/avatar.png" },
  { name: "timeless_tommy", avatar: "/avatar.png" },
  { name: "oldschool_rick", avatar: "/avatar.png" },
];

export default function Feed({ collage }) {
  const generateImageMockUsers = (n) => {
    const urls = [];

    for (let i = 0; i < n; i++) {
      urls.push(`https://picsum.photos/seed/${Math.random()}/300/300?`);
    }

    return urls;
  };

  return (
    <Carousel>
      <CarouselContent>
        {collage.map((img) => (
          <CarouselItem key={img.url} className="basis-1/3">
            <Polaroid url={img.url} caption={img.caption} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
