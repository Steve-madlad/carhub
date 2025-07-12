"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero">
      <div className="padding-x flex-1 pt-36">
        <h1 className="hero__title leading-[3.5rem] sm:leading-[5rem] lg:leading-[6rem]">
          Find, book, or rent a car - quick and easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          asChild
          className="mt-10 w-fit rounded-full border-2 border-primary-blue bg-primary-blue text-white hover:bg-white hover:text-primary-blue focus:bg-white focus:text-primary-blue"
        >
          <Link href={"#catalogue"}>Explore Cars</Link>
        </CustomButton>
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            alt="hero image"
            src="/hero.png"
            fill
            className="object-contain"
          />
        </div>

        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
}
