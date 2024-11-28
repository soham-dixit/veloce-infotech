"use client";

import { Link as ScrollLink } from "react-scroll";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex flex-1 items-center gap-3">
            <Logo />
            <span className="text-gray-300 text-lg font-semibold hidden lg:block">
              Veloce Infotech
            </span>
          </div>

          {/* Desktop navigation links */}
          <ul className="flex flex-1 items-center justify-end gap-6">
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-300 hover:text-indigo-500 transition text-sm sm:sm md:text-lg lg:text-xl"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="expertise"
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-300 hover:text-indigo-500 transition text-sm sm:sm md:text-lg lg:text-xl"
              >
                Expertise
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-300 hover:text-indigo-500 transition text-sm sm:sm md:text-lg lg:text-xl"
              >
                Services
              </ScrollLink>
            </li>
            {/* <li>
              <ScrollLink
                to="why-choose-us"
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-300 hover:text-indigo-500 transition text-sm sm:text-base md:text-lg lg:text-xl"
              >
                Why Choose Us
              </ScrollLink>
            </li> */}
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-300 hover:text-indigo-500 transition text-sm sm:sm md:text-lg lg:text-xl"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
