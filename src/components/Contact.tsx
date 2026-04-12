"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contacto" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#050a15] to-[#030303]" />

      {/* Glow effects */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 opacity-20 blur-[120px]">
        <div className="h-full w-full bg-gradient-to-r from-cyan-500/40 to-blue-500/40 rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Contacto
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Hablemos de tu proyecto
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Cuéntanos qué necesitas y te respondemos en menos de 24 horas con
            una propuesta personalizada.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8 lg:col-span-2"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-heading text-base font-semibold text-foreground">
                  Email
                </h4>
                <p className="mt-1 text-sm text-muted">info@antontech.es</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-heading text-base font-semibold text-foreground">
                  Teléfono
                </h4>
                <p className="mt-1 text-sm text-muted">+34 600 000 000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-heading text-base font-semibold text-foreground">
                  Ubicación
                </h4>
                <p className="mt-1 text-sm text-muted">España</p>
              </div>
            </div>

            {/* Decorative card */}
            <div className="mt-auto rounded-2xl border border-white/[0.06] bg-gradient-to-br from-accent/10 to-accent-blue/10 p-6">
              <p className="text-sm leading-relaxed text-muted">
                <span className="text-foreground font-semibold">
                  Respuesta rápida garantizada.
                </span>{" "}
                No somos un formulario que se pierde en el vacío. Somos dos
                personas reales que leen cada mensaje y responden personalmente.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/[0.06] bg-card/50 p-8"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent/50 focus:ring-1 focus:ring-accent/25"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent/50 focus:ring-1 focus:ring-accent/25"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Asunto
                </label>
                <select
                  id="subject"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/25"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona un servicio
                  </option>
                  <option value="web">Desarrollo Web</option>
                  <option value="software">Software a Medida</option>
                  <option value="seguridad">Ciberseguridad</option>
                  <option value="sistemas">Sistemas e Infraestructura</option>
                  <option value="digitalizacion">Digitalización</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent/50 focus:ring-1 focus:ring-accent/25"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-blue px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 disabled:opacity-70 cursor-pointer"
              >
                {submitted ? (
                  "Mensaje enviado"
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
