import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const navLinks = [
    { title: "Features", href: "#features" },
    { title: "Products", href: "#products" },
    { title: "Pricing", href: "#pricing" },
    { title: "Socials", href: "#socials" },
  ];

  return (
    <div className="border-b border-neutral-200 dark:border-neutral-700">
      <Container className="flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg">
            <img
              src="https://i.pinimg.com/1200x/43/d3/4a/43d34a2642696335861e75fc4c5a2db7.jpg"
              alt="Aether Logo"
              className="h-6 w-6 rounded-sm object-cover"
            />
          </div>
          <span className="text-xl font-semibold">Aether</span>
        </div>
        <div className="flex items-center justify-center gap-4">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.title}
              className="font-semibold text-neutral-500 transition-colors duration-200 hover:text-neutral-800"
            >
              {link.title}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Button
            href="/login"
            className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-700"
          >
            Login
          </Button>
          <Button className="shadow-brand-hover cursor-pointer bg-neutral-800 text-sm text-neutral-100 hover:text-neutral-50 hover:shadow-xl">
            Signup
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
