import { useState } from "react";
import Polaroid from "./Polaroid";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TextEditor({
  openTextEditor = true,
  setCollage,
  collage,
}) {
  return (
    <Carousel>
      <CarouselContent>
        {collage?.map((img) => (
          <CarouselItem key={img.url} className="md:basis-1/3 ">
            <div className="flex items-center justify-center">
              <Polaroid
                url={img.url}
                openTextEditor={openTextEditor}
                collage={collage}
                setCollage={setCollage}
              />
            </div>
          </CarouselItem>
        ))}{" "}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
