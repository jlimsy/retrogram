import Polaroid from "./Polaroid";
import { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Canvas({ collage, isEditing }) {
  return (
    <div className="h-content bg-white m-10 ">
      {collage.length > 0 ? (
        <Carousel
          plugins={[
            Autoplay({
              delay: 250,
              loop: false,
              stopOnLastSnap: true,
            }),
          ]}
        >
          <CarouselContent>
            {collage.map((img, index) => (
              <CarouselItem
                key={index}
                className="flex items-center justify-center"
              >
                <Polaroid isEditing url={img.url} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <p className="text-center">Select photos to create Polaroid</p>
      )}
    </div>
  );
}
