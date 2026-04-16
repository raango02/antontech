"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-4 left-4 right-4 z-50 mx-auto max-w-6xl rounded-2xl border transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-[#030303]/80 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "border-white/5 bg-[#030303]/40 backdrop-blur-md"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 cursor-pointer">
          <Image src="/logo.png" alt="AntonTech" width={36} height={36} className="h-9 w-9" />
          <span className="font-heading text-lg font-bold text-foreground">
            Anton<span className="text-accent">Tech</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-muted transition-colors duration-200 hover:text-foreground cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-xl bg-gradient-to-r from-accent to-accent-blue px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 cursor-pointer"
          >
            Hablemos
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-foreground md:hidden cursor-pointer"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/5 md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base text-muted transition-colors hover:text-foreground cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-xl bg-gradient-to-r from-accent to-accent-blue px-5 py-3 text-center text-sm font-semibold text-white cursor-pointer"
              >
                Hablemos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
