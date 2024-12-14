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
  console.log("collage", collage);
  return (
    <div className="w-fit">
      <Carousel>
        <CarouselContent>
          {collage?.map((url) => (
            <CarouselItem key={url} className="basis-1/3 ">
              <div className="flex items-center justify-center">
                <Polaroid url={url} openTextEditor={openTextEditor} />
              </div>
            </CarouselItem>
          ))}{" "}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
