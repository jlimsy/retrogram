import { useState } from "react";
import Polaroid from "./Polaroid";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TextEditor({ openTextEditor = true, collage }) {
  console.log("collage in texteditor", collage);
  return (
    <Carousel>
      <CarouselContent>
        {collage?.map((img) => (
          <CarouselItem key={img.url} className="basis-1/3 ">
            <div className="flex items-center justify-center">
              <Polaroid url={img.url} openTextEditor={openTextEditor} />
            </div>
          </CarouselItem>
        ))}{" "}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
