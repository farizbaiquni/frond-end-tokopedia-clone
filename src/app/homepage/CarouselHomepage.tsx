"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const CarouselLandingPage = () => {
  const slides = [
    {
      id: 1,
      image:
        "/images/landing_page/carousel/9d652b24-1fa0-4e7b-a921-b70787506e1d.jpg.webp",
      desription: "description 1",
    },
    {
      id: 2,
      image:
        "/images/landing_page/carousel/1c3336d1-7103-40d4-8c4e-8d6184b11342.jpg.webp",
      desription: "description 2",
    },
    {
      id: 3,
      image:
        "/images/landing_page/carousel/473d65da-d0b0-40c8-a874-178d10dc5e75.jpg.webp",
      desription: "description 3",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Move to the next slide automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="group relative w-full flex-1 cursor-pointer overflow-hidden rounded-lg">
      {/* Container for slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex h-[300px] min-w-full items-center justify-center bg-purple-200"
          >
            <div className="relative h-full w-full">
              <Image
                fill
                src={slide.image}
                className="object-cover"
                quality={100}
                alt="slide"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <Image
        src={"/icons/right-arrow.png"}
        onClick={prevSlide}
        width={100}
        height={100}
        className="absolute left-1 top-1/2 z-10 hidden w-10 -translate-y-1/2 -scale-x-100 transform rounded-full border bg-white p-3 shadow-md shadow-gray-900 group-hover:block"
        alt="left-arrow"
      />

      <Image
        src={"/icons/right-arrow.png"}
        onClick={nextSlide}
        width={100}
        height={100}
        className="absolute right-1 top-1/2 z-10 hidden w-10 -translate-y-1/2 transform rounded-full border bg-white p-3 shadow-md shadow-gray-500 group-hover:block"
        alt="right-arrow"
      />

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-4 flex space-x-1">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-200 opacity-50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <h2 className="absolute bottom-2 right-2 rounded bg-black bg-opacity-80 p-1 text-xs text-white">
        View All Promos
      </h2>
    </div>
  );
};

export default CarouselLandingPage;
