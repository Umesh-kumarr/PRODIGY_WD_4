import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#33353F] bg-gray-900 text-white py-6" aria-label="Footer">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-2">
        <span className="font-bold text-lg">Umesh.dev</span>
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Umesh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
