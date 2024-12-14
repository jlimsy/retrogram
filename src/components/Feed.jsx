import Polaroid from "./Polaroid";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Feed() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="basis-1/3">
          <Polaroid />
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <Polaroid />
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <Polaroid />
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <Polaroid />
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <Polaroid />
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <Polaroid />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
