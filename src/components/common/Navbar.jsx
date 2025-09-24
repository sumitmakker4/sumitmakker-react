import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pageLinks = [
    { label: "Home", link: "/" },
    { label: "Projects", link: "/projects" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  const socialMediaLinks = [
    { icon: "pi pi-linkedin", link: "https://www.linkedin.com/in/sumit-makker" },
    { icon: "pi pi-instagram", link: "https://www.instagram.com/sumit__makker" },
  ];

  const PageLink = ({ item }) => (
    <NavLink
      to={item.link}
      className={({ isActive }) =>
        `text-[16px] md:text-[18px] transition-colors duration-300 ${
          isActive
            ? "!text-[#F8F7F9] font-bold"
            : "!text-[#A9A9A9] font-normal hover:!text-[#F8F7F9] hover:font-bold"
        }`
      }
      onClick={() => setMenuOpen(false)} // close menu on mobile click
    >
      {item.label}
    </NavLink>
  );

  const SocialMediaLink = ({ item }) => (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className={`!font-normal !text-[#A9A9A9] text-[18px] hover:!text-[#F8F7F9] ${item.icon}`}
    ></a>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${!hidden && "shadow-[0_1px_12px_rgba(255,255,255,0.2)] lg:shadow-[0_1px_20px_rgba(255,255,255,0.2)]"}
        py-4 md:py-6 fixed top-0 left-0 w-full z-50
        bg-[#1F1F1F] transition-transform duration-500
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="flex items-center justify-between max-w-[90%] md:max-w-[85%] lg:max-w-[70%] xl:max-w-[60%] mx-auto">
        {/* Logo */}
        <img alt="logo" className="w-[100px] md:w-[120px]" />

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-10 lg:gap-14">
          {/* Page Links */}
          <div className="flex gap-6 lg:gap-14">
            {pageLinks.map((item, i) => (
              <PageLink key={i} item={item} />
            ))}
          </div>

          {/* Separator */}
          <div className="border-l border-[#A9A9A9] h-6" />

          {/* Social Media */}
          <div className="flex items-center gap-6 lg:gap-10">
            {socialMediaLinks.map((item, i) => (
              <SocialMediaLink key={i} item={item} />
            ))}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#F8F7F9] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-[#1F1F1F] border-t border-[#333]">
          {pageLinks.map((item, i) => (
            <PageLink key={i} item={item} />
          ))}

          <div className="flex items-center gap-6">
            {socialMediaLinks.map((item, i) => (
              <SocialMediaLink key={i} item={item} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}