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
        {collage.map((url) => (
          <CarouselItem key={url} className="basis-1/3">
            <Polaroid url={url} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
