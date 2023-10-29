import React from "react";
import Link from "next/link";
import Image from "next/image";

const navIcons = [
  { src: "/assets/icons/search.svg", alt: "Search" },
  { src: "/assets/icons/red-heart.svg", alt: "Wishlist" },

  { src: "/assets/icons/user.svg", alt: "User" },
];

export const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.svg"
            alt="Logo"
            width={50}
            height={50}
          />
          <p className="nav-logo">Pricer</p>
        </Link>

        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={30}
              height={30}
              className="object-contain"
            />
          ))}
        </div>
      </nav>
    </header>
  );
};
