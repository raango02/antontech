"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

function FloatingShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-cyan-500/[0.12]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r to-transparent ${gradient} backdrop-blur-[2px] border border-white/[0.08] shadow-[0_8px_32px_0_rgba(6,182,212,0.06)]`}
        />
      </motion.div>
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.3 + i * 0.15,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#030303]"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.05] via-transparent to-accent-blue/[0.05] blur-3xl" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingShape
          delay={0.2}
          width={550}
          height={130}
          rotate={12}
          gradient="from-cyan-500/[0.12]"
          className="left-[-10%] top-[20%]"
        />
        <FloatingShape
          delay={0.4}
          width={450}
          height={110}
          rotate={-15}
          gradient="from-blue-500/[0.12]"
          className="right-[-5%] top-[70%]"
        />
        <FloatingShape
          delay={0.3}
          width={280}
          height={70}
          rotate={-8}
          gradient="from-violet-500/[0.1]"
          className="left-[8%] bottom-[10%]"
        />
        <FloatingShape
          delay={0.5}
          width={180}
          height={50}
          rotate={20}
          gradient="from-cyan-400/[0.1]"
          className="right-[18%] top-[12%]"
        />
        <FloatingShape
          delay={0.6}
          width={130}
          height={35}
          rotate={-20}
          gradient="from-blue-400/[0.1]"
          className="left-[25%] top-[8%]"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2"
        >
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted">
            Soluciones tecnológicas integrales
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-heading text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
            Tecnología que
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-white/90 to-blue-400 bg-clip-text text-transparent">
            impulsa tu negocio
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg md:text-xl"
        >
          Desarrollo web, software a medida, ciberseguridad y transformación
          digital. Dos hermanos, una misión: llevar tu empresa al siguiente
          nivel.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contacto"
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-blue px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 cursor-pointer"
          >
            Solicita presupuesto
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#servicios"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-foreground transition-all duration-200 hover:border-white/20 hover:bg-white/10 cursor-pointer"
          >
            Ver servicios
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/60" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
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
