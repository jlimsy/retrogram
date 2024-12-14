import Polaroid from "./Polaroid";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Canvas({ setCollage, collage, isEditing }) {
  return (
    <div className="h-content bg-white m-10">
      {collage.length ? (
        <Carousel>
          <CarouselContent>
            {collage.map((url, index) => (
              <CarouselItem key={index}>
                <Polaroid isEditing url={url} />
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
