"use client";
import Link from "next/link";

const NavLink = ({ href, title }) => {
  const handleClick = (e) => {
    // If it's an anchor link, handle smooth scrolling
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl md:text-lg lg:text-xl rounded md:p-0 hover:text-white transition-colors duration-200"
    >
      {title}
    </Link>
  );
};

export default NavLink;