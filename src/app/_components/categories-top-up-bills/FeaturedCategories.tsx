"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const categories = [
  {
    id: 1,
    description: "Makanan Kering",
    src: "/images/homepage/categories/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg.webp",
  },
  {
    id: 2,
    description: "Figure",
    src: "/images/homepage/categories/3127195_c6f70915-577f-4cd4-834c-daf892265ef0.jpg.webp",
  },
  {
    id: 3,
    description: "Tas Selempang Pria",
    src: "/images/homepage/categories/3127195_d7c67b76-9ff4-46f9-93a3-ec4be4918439.jpg.webp",
  },
  {
    id: 4,
    description: "Flat Shoes Wanita",
    src: "/images/homepage/categories/3127195_76d08c44-8194-4454-9fb0-1e7a64b656aa.jpg.webp",
  },
  {
    id: 5,
    description: "Toples",
    src: "/images/homepage/categories/3127195_cfe03d9c-d79f-4327-8247-458429e1b116.jpg.webp",
  },

  {
    id: 6,
    description: "Hardisk & Flashdisk",
    src: "/images/homepage/categories/3127195_2883bb63-8f91-4c9c-a423-d68b22e51b78.jpg.webp",
  },
];

function FeaturedCategories() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex flex-1 flex-col px-7">
      <h2 className="text-2xl font-bold">Kategori Pilihan</h2>
      <div className="group relative">
        <div className="embla group relative overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex w-full">
            <FeaturedCategories1 />
            <FeaturedCategories2 />
          </div>
        </div>

        {/* Navigation Button */}
        <button
          onClick={scrollPrev}
          className="absolute -left-4 top-1/2 h-7 w-7 -translate-y-1/2 translate-x-6 transform rounded-full bg-white p-2 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          type="button"
        >
          <svg viewBox="0 0 532 532" className="text-gray-600">
            <path
              fill="currentColor"
              d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
            ></path>
          </svg>
        </button>

        <button
          onClick={scrollNext}
          className="absolute -right-4 top-1/2 h-7 w-7 -translate-x-6 -translate-y-1/2 transform rounded-full bg-white p-2 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          type="button"
        >
          <svg viewBox="0 0 532 532" className="text-gray-600">
            <path
              fill="currentColor"
              d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

function FeaturedCategories1() {
  return (
    <div className="embla__slide flex min-w-0 flex-[0_0_100%] gap-x-7 py-5">
      <Image
        alt={categories[0].description}
        src={categories[0].src}
        width={140}
        height={140}
      />
      <Image
        alt={categories[1].description}
        src={categories[1].src}
        width={140}
        height={140}
      />
      <Image
        alt={categories[2].description}
        src={categories[2].src}
        width={140}
        height={140}
      />
      <Image
        alt={categories[3].description}
        src={categories[3].src}
        width={140}
        height={140}
      />
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function FeaturedCategories2() {
  return (
    <div className="embla__slide flex min-w-0 flex-[0_0_100%] gap-x-7 py-5">
      <Image
        alt={categories[3].description}
        src={categories[3].src}
        width={140}
        height={140}
      />
      <Image
        alt={categories[4].description}
        src={categories[4].src}
        width={140}
        height={140}
      />
      <Image
        alt={categories[5].description}
        src={categories[5].src}
        width={140}
        height={140}
      />
      <Image
        alt={categories[0].description}
        src={categories[0].src}
        width={140}
        height={140}
      />
    </div>
  );
}

export default FeaturedCategories;
