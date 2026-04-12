"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, ShieldCheck, Users, Zap, Target, Heart } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Agilidad",
    description: "Soluciones rápidas sin sacrificar calidad. Nos adaptamos a tus tiempos.",
  },
  {
    icon: Target,
    title: "Precisión",
    description: "Cada proyecto se ajusta exactamente a lo que tu negocio necesita.",
  },
  {
    icon: Heart,
    title: "Compromiso",
    description: "Tu éxito es nuestro éxito. Acompañamos cada proyecto de principio a fin.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="nosotros" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#080d18] to-[#030303]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Quiénes somos
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Dos hermanos, una visión
          </h2>
        </motion.div>

        {/* Story */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-6 text-lg leading-relaxed text-muted">
              Somos <span className="text-foreground font-semibold">AntonTech</span>, una empresa
              tecnológica fundada por dos hermanos con una pasión compartida: la
              tecnología al servicio de las empresas.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-muted">
              Uno de nosotros es experto en{" "}
              <span className="text-cyan-400">programación y desarrollo web</span>,
              el otro en{" "}
              <span className="text-blue-400">
                sistemas y ciberseguridad
              </span>
              . Juntos, cubrimos todo el espectro tecnológico que una empresa
              necesita para crecer.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              No somos una gran corporación. Somos un equipo cercano que trabaja
              directamente contigo, entendiendo tu negocio y ofreciendo
              soluciones reales, no plantillas genéricas.
            </p>
          </motion.div>

          {/* Team cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-6"
          >
            {/* Brother 1 */}
            <div className="group rounded-2xl border border-white/[0.06] bg-card/50 p-6 transition-all duration-300 hover:border-cyan-500/20">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 text-cyan-400">
                  <Code2 className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Desarrollo y Programación
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    Experto en desarrollo web, aplicaciones y software a medida.
                    Convierte ideas en productos digitales funcionales y
                    atractivos.
                  </p>
                </div>
              </div>
            </div>

            {/* Brother 2 */}
            <div className="group rounded-2xl border border-white/[0.06] bg-card/50 p-6 transition-all duration-300 hover:border-blue-500/20">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 text-blue-400">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Sistemas y Ciberseguridad
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    Especialista en infraestructura IT, administración de
                    sistemas y seguridad informática. Protege y optimiza tu
                    entorno tecnológico.
                  </p>
                </div>
              </div>
            </div>

            {/* Together */}
            <div className="group rounded-2xl border border-white/[0.06] bg-gradient-to-r from-cyan-500/10 via-card/50 to-blue-500/10 p-6 transition-all duration-300 hover:border-white/15">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-blue/20 text-foreground">
                  <Users className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Juntos = Solución Completa
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    Desarrollo + Seguridad + Sistemas. Todo lo que necesitas en
                    un solo equipo, sin intermediarios ni complicaciones.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid gap-6 sm:grid-cols-3"
        >
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-white/[0.06] bg-card/30 p-6 text-center transition-all duration-300 hover:border-white/10"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent">
                <value.icon className="h-6 w-6" />
              </div>
              <h4 className="mb-2 font-heading text-lg font-semibold text-foreground">
                {value.title}
              </h4>
              <p className="text-sm text-muted">{value.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
