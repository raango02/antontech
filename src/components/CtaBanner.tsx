"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, Clock, Handshake, Shield } from "lucide-react";

/* ─── Animated number ─── */
function AnimatedStat({
  value,
  suffix,
  label,
  icon: Icon,
  delay,
  inView,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  delay: number;
  inView: boolean;
}) {
  const spring = useSpring(0, { bounce: 0, duration: 2000 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) spring.set(value);
    else spring.set(0);
  }, [inView, spring, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsubscribe;
  }, [spring]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center gap-2 text-center"
    >
      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <div className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
        {display}
        <span className="text-accent">{suffix}</span>
      </div>
      <p className="text-sm text-muted">{label}</p>
    </motion.div>
  );
}

export default function CtaBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      value: 24,
      suffix: "h",
      label: "Tiempo de respuesta",
      icon: Clock,
    },
    {
      value: 100,
      suffix: "%",
      label: "Dedicación a tu proyecto",
      icon: Handshake,
    },
    {
      value: 0,
      suffix: "€",
      label: "Primera consulta",
      icon: Shield,
    },
  ];

  return (
    <section ref={ref} className="relative py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Stats */}
        <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <AnimatedStat
              key={stat.label}
              {...stat}
              delay={0.2 + i * 0.15}
              inView={isInView}
            />
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-card/30 p-10 text-center sm:p-16"
        >
          {/* Glow effects */}
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-blue-500/10 blur-[100px]" />

          <h2 className="relative font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
            ¿Tienes una idea?{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Hagámosla realidad
            </span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted">
            Primera consulta gratuita. Te escuchamos, analizamos tu caso y te
            damos una propuesta sin compromiso. Sin sorpresas.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#contacto"
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-blue px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 cursor-pointer"
            >
              Agenda tu consulta gratuita
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
