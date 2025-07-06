"use client"; // Diperlukan untuk menggunakan hook usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHome, GoBriefcase, GoTag } from "react-icons/go"; // Contoh ikon

export default function Navbar() {
  // Hook untuk mendapatkan path URL saat ini
  const pathname = usePathname();

  // Daftar link untuk memudahkan pengelolaan
  const navLinks = [
    { href: "/", label: "Home", icon: GoHome },
    { href: "/portfolio", label: "Portfolio", icon: GoBriefcase },
    { href: "/pricelist", label: "Pricelist", icon: GoTag },
  ];

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full bg-white border-t border-slate-200 shadow-[0_-2px_10px_-3px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around max-w-lg mx-auto">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon; // Ambil komponen ikon

          return (
            <Link
              key={link.href}
              href={link.href}
              // Terapkan style berbeda jika link sedang aktif
              className={`flex flex-col items-center justify-center w-full gap-1 py-3 transition-colors duration-200 ${
                isActive
                  ? "text-pink-500" // Style untuk link aktif
                  : "text-slate-500 hover:text-pink-500" // Style untuk link non-aktif
              }`}
            >
              <Icon size={22} />
              <span className="text-xs font-medium">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}