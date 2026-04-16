"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { basePath } from "@/lib/config";

export default function SplashScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem("splash-seen")) {
      setShow(false);
      return;
    }

    setShow(true);

    // Start exit after 2.8s
    const exitTimer = setTimeout(() => setExit(true), 2800);
    // Fully remove after exit animation completes
    const removeTimer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("splash-seen", "1");
    }, 3500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Word splitting for "AntonTech"
  const name1 = "Anton";
  const name2 = "Tech";

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: 0 }}
            animate={exit ? { y: "-100%" } : { y: 0 }}
            transition={
              exit
                ? { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
                : undefined
            }
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030303]"
          >
            {/* Subtle grid */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mb-6"
            >
              <Image
                src={`${basePath}/logo.png`}
                alt="AntonTech"
                width={64}
                height={64}
                className="h-16 w-16"
                priority
              />
            </motion.div>

            {/* Company name */}
            <div className="flex items-baseline font-heading text-4xl font-bold sm:text-5xl">
              {name1.split("").map((char, i) => (
                <motion.span
                  key={`n1-${i}`}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + i * 0.07,
                    ease: "easeOut",
                  }}
                  className="text-[#f8fafc]"
                >
                  {char}
                </motion.span>
              ))}
              {name2.split("").map((char, i) => (
                <motion.span
                  key={`n2-${i}`}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + (name1.length + i) * 0.07,
                    ease: "easeOut",
                  }}
                  className="text-[#06b6d4]"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
              className="mt-3 h-px w-32 origin-center bg-gradient-to-r from-transparent via-[#06b6d4]/50 to-transparent"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="mt-4 text-xs tracking-[0.3em] uppercase text-white/30"
            >
              Soluciones tecnológicas
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content - slightly delayed opacity for smooth reveal */}
      <motion.div
        initial={false}
        animate={{ opacity: show && !exit ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
}
