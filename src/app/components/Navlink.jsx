"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, title, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        isActive ? "text-white" : "text-gray-300"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {title}
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform transition-all duration-300 ${
          isActive ? "scale-x-100" : "scale-x-0"
        } group-hover:scale-x-100`}
      ></span>
    </Link>
  );
};

export default Navlink;
