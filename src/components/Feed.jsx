import { useEffect, useState } from "react";
import Polaroid from "./Polaroid";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import johnAvatar from "../assets/avatars/john.png";
import janeAvatar from "../assets/avatars/jane.png";
import tommyAvatar from "../assets/avatars/tommy.png";
import rickAvatar from "../assets/avatars/rick.png";
import renaissanceAvatar from "../assets/avatars/renaissance.png";
import myAvatar from "../assets/avatars/me.png";

const mockUsers = [
  { name: "john_doe_vibes", avatar: johnAvatar },
  { name: "jane_jams_90s", avatar: janeAvatar },
  { name: "timeless_tommy", avatar: tommyAvatar },
  { name: "oldschool_rick", avatar: rickAvatar },
  { name: "retro_renaissance", avatar: renaissanceAvatar },
];

const MAX_NUM_PHOTOS = 10;

export default function Feed({ collage }) {
  const [users, setUsers] = useState([]);

  const generateImagesMockUsers = (n) => {
    const urls = [];

    for (let i = 0; i < n; i++) {
      urls.push(
        `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`
      );
    }
    return urls;
  };

  useEffect(() => {
    const usersWithPhotos = mockUsers.map((user) => ({
      ...user,
      photos: generateImagesMockUsers(MAX_NUM_PHOTOS),
    }));

    // Now you can use usersWithPhotos state if needed
    // Example: setUsers(usersWithPhotos)

    setUsers(usersWithPhotos);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {collage.length > 0 && (
        <div>
          <div className="flex items-center gap-4">
            <img
              src={myAvatar}
              className="h-12 aspect-square rounded-full object-cover"
            />
            <h1 className="text-xl">@me</h1>
          </div>

          <Carousel>
            <CarouselContent>
              {collage?.map((img) => (
                <CarouselItem
                  key={img.url}
                  className="md:basis-1/3 lg:basis-1/3 flex items-center justify-center"
                >
                  <Polaroid url={img.url} caption={img.caption} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}
      <div className="flex flex-col gap-6 ">
        {users.map((user) => (
          <div key={user.name}>
            <div className="flex items-center gap-4">
              <img
                src={user.avatar}
                className="h-12 aspect-square rounded-full object-cover"
              />
              <h1 className="text-lg">@{user.name}</h1>
            </div>
            <Carousel>
              <CarouselContent>
                {user?.photos?.map((photo, index) => (
                  <CarouselItem
                    key={index}
                    className="md:balacsis-1/3  lg:basis-1/3 flex items-center justify-center"
                  >
                    <Polaroid url={photo} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        ))}
      </div>
    </div>
  );
}
