import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

export default function Navbar() {
  return (
    <header className="absolute z-10 w-full">
      <nav className="flex-between mx-auto max-w-[1440px] px-6 py-4 sm:px-16">
        <Link href="/" className="flex-center">
          <Image
            src="/logo.svg"
            alt="car hub logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
}
