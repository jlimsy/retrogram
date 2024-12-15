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

export default function Canvas({
  collage,
  isEditing,
  openAlbum,
  isDeveloping,
}) {
  return (
    <div className="h-content m-10 ">
      {collage.length > 0 ? (
        <div>
          <Carousel
            plugins={[
              Autoplay({
                delay: 300,
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
                  <Polaroid isEditing url={img.url} openAlbum={openAlbum} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="h-32 flex justify-center items-center">
            {isDeveloping ? (
              <img
                src="https://unpkg.com/pixelarticons@1.8.1/svg/hourglass.svg"
                className="w-5"
              />
            ) : (
              <img
                src="https://unpkg.com/pixelarticons@1.8.1/svg/checkbox.svg"
                className="w-5"
              />
            )}
            <p className={`text-center ${isDeveloping && "animate-bounce"}`}>
              {isDeveloping ? " Developing..." : "Developed!"}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-center box-border-sm rounded-md p-2">
          Select photos from your album to develop your Polaroids!
        </p>
      )}
    </div>
  );
}
