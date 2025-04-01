"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image:
      "/images/homepage/carousel/9d652b24-1fa0-4e7b-a921-b70787506e1d.jpg.webp",
  },
  {
    id: 2,
    image:
      "/images/homepage/carousel/1c3336d1-7103-40d4-8c4e-8d6184b11342.jpg.webp",
  },
  {
    id: 3,
    image:
      "/images/homepage/carousel/473d65da-d0b0-40c8-a874-178d10dc5e75.jpg.webp",
  },
];

function Homepage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayPlugin = Autoplay({ delay: 2000, stopOnInteraction: false });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplayPlugin,
  ]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    const autoplay = emblaApi.plugins().autoplay;
    autoplay?.reset();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    const autoplay = emblaApi.plugins().autoplay;
    autoplay?.reset();
  }, [emblaApi]);

  const updateScrollSnap = useCallback(() => {
    setSelectedIndex(emblaApi?.selectedScrollSnap() || 0);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => updateScrollSnap();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, updateScrollSnap]);

  return (
    <div className="group relative">
      <div className="embla h-[340px] w-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {slides.map((slide) => (
            <div
              className="embla__slide relative min-w-0 flex-[0_0_100%]"
              key={slide.id}
            >
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.id.toString()}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                  className="object-cover"
                  priority={slide.id === 1}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-4 flex gap-1">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-1.5 w-1.5 rounded-full bg-white transition-all duration-300 ${
              index === selectedIndex
                ? "scale-125 opacity-100"
                : "scale-100 opacity-50"
            }`}
          />
        ))}
      </div>

      <button className="absolute bottom-2 right-4 rounded-md bg-black px-2 py-1">
        <p className="text-xs font-medium text-white">View All Promos</p>
      </button>

      <button
        onClick={scrollPrev}
        className="absolute -left-5 top-1/2 h-10 w-10 -translate-y-1/2 translate-x-6 transform rounded-full bg-white p-3 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        type="button"
      >
        <svg viewBox="0 0 532 532" className="text-gray-400">
          <path
            fill="currentColor"
            d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
          ></path>
        </svg>
      </button>

      <button
        onClick={scrollNext}
        className="absolute -right-5 top-1/2 h-10 w-10 -translate-x-6 -translate-y-1/2 transform rounded-full bg-white p-3 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        type="button"
      >
        <svg viewBox="0 0 532 532" className="text-gray-400">
          <path
            fill="currentColor"
            d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default Homepage;
