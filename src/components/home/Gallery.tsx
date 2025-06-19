"use client";

import "slick-carousel/slick/slick.css";
import "./slider.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Slider from "react-slick";
import clsx from "clsx";
import Image from "next/image";

function SlideArrow(props: {
  to: string;
  onClick?: React.MouseEventHandler | undefined;
}) {
  const { to, onClick } = props;
  return (
    <div
      className={clsx(
        "absolute -top-3 z-10 flex h-full w-10 items-center justify-center",
        to == "next" ? "right-0" : "left-0",
      )}
    >
      <button className="text-zinc-500" onClick={onClick} aria-label={to}>
        {to == "next" ? (
          <IoChevronForward size={32} />
        ) : (
          <IoChevronBack size={32} />
        )}
      </button>
    </div>
  );
}

export default function SimpleSlider() {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <SlideArrow to="prev" />,
    nextArrow: <SlideArrow to="next" />,
    appendDots: (dots: React.ReactNode) => (
      <>
        <ul className="mt-4 flex justify-center gap-4"> {dots} </ul>
      </>
    ),
    customPaging: () => (
      <div className="h-3 w-3 cursor-pointer rounded-full bg-zinc-300"></div>
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const photos = [
    { src: "/gallery/1.jpg", alt: "1", caption: "Dreamagination" },
    { src: "/gallery/2.jpeg", alt: "2", caption: "Dreamagination" },
    { src: "/gallery/3.jpeg", alt: "3", caption: "Dreamagination" },
    { src: "/gallery/4.jpg", alt: "4", caption: "Dreamagination" },
    { src: "/gallery/5.jpg", alt: "5", caption: "Dreamagination" },
    { src: "/gallery/6.jpg", alt: "6", caption: "Dreamagination" },
    { src: "/gallery/7.jpg", alt: "7", caption: "Dreamagination" },
  ];

  return (
    <div className="mt-16 md:px-12">
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div className="aspect-[4/3] w-full" key={index}>
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                layout="fill"
                objectFit="cover" // Menambahkan object-fit cover agar gambar menyesuaikan frame
                className="transition-transform duration-200 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-white">{photo.caption}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
