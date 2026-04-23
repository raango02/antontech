"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

/* ─── Animated word component ─── */
function AnimatedWord({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      }}
      className="inline-block mx-[0.12em]"
    >
      {children}
    </motion.span>
  );
}

/* ─── Click ripple ─── */
interface Ripple {
  id: number;
  x: number;
  y: number;
}

/* ════════════════════════════════
   HERO
   ════════════════════════════════ */
export default function Hero() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = useCallback((e: MouseEvent) => {
    const r: Ripple = { id: Date.now(), x: e.clientX, y: e.clientY };
    setRipples((prev) => [...prev, r]);
    setTimeout(
      () => setRipples((prev) => prev.filter((p) => p.id !== r.id)),
      1000,
    );
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [handleClick]);

  const line1 = ["Tecnología", "que"];
  const line2 = ["impulsa", "tu", "negocio"];

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2"
        >
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted">
            Soluciones tecnológicas integrales
          </span>
        </motion.div>

        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          <div className="mb-2">
            {line1.map((word, i) => (
              <AnimatedWord key={word} delay={0.5 + i * 0.15}>
                <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                  {word}
                </span>
              </AnimatedWord>
            ))}
          </div>
          <div>
            {line2.map((word, i) => (
              <AnimatedWord key={word} delay={0.9 + i * 0.15}>
                <span className="bg-gradient-to-r from-cyan-300 via-white/90 to-blue-400 bg-clip-text text-transparent">
                  {word}
                </span>
              </AnimatedWord>
            ))}
          </div>
        </h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 2, ease: "easeOut" }}
          className="mx-auto mt-4 h-px max-w-xs overflow-hidden"
        >
          <div className="h-full w-full bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg md:text-xl"
        >
          Tu partner tecnológico integral.
          <br />
          Desarrollo, seguridad y digitalización para tu empresa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#servicios"
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-blue px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 cursor-pointer"
          >
            Ver servicios
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#contacto"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-foreground transition-all duration-200 hover:border-white/20 hover:bg-white/10 cursor-pointer"
          >
            Hablemos
          </a>
        </motion.div>
      </div>

      {/* ── Click ripples ── */}
      {ripples.map((r) => (
        <motion.div
          key={r.id}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pointer-events-none fixed z-50 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/40"
          style={{ left: r.x, top: r.y }}
        />
      ))}

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-muted/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
