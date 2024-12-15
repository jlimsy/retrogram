import Polaroid from "./Polaroid";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Feed({ collage }) {
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
