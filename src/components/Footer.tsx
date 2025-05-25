import { footerLinks } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="col mt-5 border-t border-gray-100 text-black-100">
      <div className="flex flex-wrap justify-between gap-5 px-6 py-10 max-md:flex-col sm:px-16">
        <div className="col-start gap-6">
          <Image
            alt="logo"
            src={"/logo.svg"}
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Car Hub 2025 <br /> All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((linkCategories) => {
            return (
              <div key={linkCategories.title} className="footer__link">
                <h3 className="font-bold">{linkCategories.title}</h3>
                {linkCategories.links.map((link) => (
                  <Link
                    className="text-gray-500"
                    key={link.title}
                    href={link.url}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex-between mt-10 w-full flex-wrap gap-10 border-t border-gray-100 px-6 py-10 sm:px-16">
        <p>@2025 CarHub All rights reserved</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
