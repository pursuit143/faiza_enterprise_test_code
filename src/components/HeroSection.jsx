import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "./Carousel";

const HeroSection = () => {
  const heroSectionPhotos = [
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1735125497_English_desk.jpg?im=Resize=(2368,400)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1735125497_English_desk.jpg?im=Resize=(2368,400)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1735115131_Featured_spotlight_1184x200.jpg?im=Resize=(2368,400)",
  ];

  return (
    <div>
      <div className="w-[90%] mx-auto my-4 rounded-md max-sm:bg-red-500">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 6000,
              stopOnInteraction: true,
            }),
          ]}>
          <CarouselContent>
            {heroSectionPhotos.map((photo, index) => (
              <CarouselItem key={index}>
                <div className="h-[12rem] rounded-lg overflow-hidden text-center w-full cursor-pointer">
                  <img
                    className="w-full h-auto min-h-[12rem] object-contain max-sm:h-full"
                    src={"photo"}
                    alt="photo"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
