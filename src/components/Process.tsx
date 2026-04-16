"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Search, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consulta inicial",
    description:
      "Nos cuentas tu idea o necesidad. Escuchamos, preguntamos y entendemos tu negocio. Sin compromiso, sin letra pequeña.",
    color: "from-cyan-500 to-cyan-400",
    iconColor: "text-cyan-400",
  },
  {
    number: "02",
    icon: Search,
    title: "Análisis y propuesta",
    description:
      "Estudiamos tu caso, diseñamos la mejor solución y te presentamos una propuesta clara con plazos y presupuesto cerrado.",
    color: "from-blue-500 to-blue-400",
    iconColor: "text-blue-400",
  },
  {
    number: "03",
    icon: Code2,
    title: "Desarrollo",
    description:
      "Manos a la obra. Trabajamos de forma ágil, con entregas parciales para que veas el avance y nos des feedback continuo.",
    color: "from-violet-500 to-violet-400",
    iconColor: "text-violet-400",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Entrega y soporte",
    description:
      "Lanzamos tu proyecto, te formamos en su uso y te acompañamos con soporte continuo. No desaparecemos después de entregar.",
    color: "from-emerald-500 to-emerald-400",
    iconColor: "text-emerald-400",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="relative py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Proceso
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Cómo trabajamos
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Cuatro pasos. Sin sorpresas. Transparencia total de principio a fin.
          </p>
        </motion.div>

        {/* Steps - Desktop: horizontal, Mobile: vertical */}
        <div className="relative">
          {/* Connecting line - Desktop */}
          <div className="absolute left-0 right-0 top-[60px] hidden h-px lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="h-full w-full origin-left bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-emerald-500/30"
            />
          </div>

          {/* Connecting line - Mobile */}
          <div className="absolute bottom-0 left-[39px] top-0 w-px lg:hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="h-full w-full origin-top bg-gradient-to-b from-cyan-500/30 via-blue-500/30 to-emerald-500/30"
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className="group relative flex gap-6 lg:flex-col lg:gap-0"
              >
                {/* Number circle */}
                <div className="relative z-10 flex-shrink-0 lg:mb-8">
                  <div className="relative">
                    {/* Glow */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={
                        isInView
                          ? { opacity: [0, 0.5, 0.2], scale: [0.5, 1.2, 1] }
                          : {}
                      }
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      className={`absolute -inset-3 rounded-full bg-gradient-to-r ${step.color} blur-xl opacity-0`}
                    />
                    {/* Circle */}
                    <div
                      className={`relative flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-[#0a0f1a]`}
                    >
                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-10 transition-opacity duration-300 group-hover:opacity-25`}
                      />
                      <span className="font-heading text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-white to-white/70">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1 lg:pt-0">
                  <div className="mb-3 flex items-center gap-3">
                    <step.icon className={`h-5 w-5 ${step.iconColor}`} />
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
