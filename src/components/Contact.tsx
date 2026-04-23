"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, type FormEvent } from "react";
import { Send, Mail, MapPin, ChevronDown, Check, AlertCircle, CheckCircle2 } from "lucide-react";

/* ─── Email validation ─── */
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const COMMON_TYPOS: Record<string, string> = {
  "gmial.com": "gmail.com",
  "gmal.com": "gmail.com",
  "gamil.com": "gmail.com",
  "gmail.co": "gmail.com",
  "gmaill.com": "gmail.com",
  "hotmal.com": "hotmail.com",
  "hotmial.com": "hotmail.com",
  "hotmail.co": "hotmail.com",
  "outloo.com": "outlook.com",
  "outlok.com": "outlook.com",
  "yahooo.com": "yahoo.com",
  "yaho.com": "yahoo.com",
};

function validateEmail(email: string): { valid: boolean; suggestion?: string } {
  if (!email) return { valid: false };
  if (!EMAIL_REGEX.test(email)) return { valid: false };

  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) return { valid: false };

  const suggestion = COMMON_TYPOS[domain];
  if (suggestion) {
    return { valid: true, suggestion: email.replace(domain, suggestion) };
  }

  return { valid: true };
}

/* ─── Email Input ─── */
function EmailInput() {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const [result, setResult] = useState<{ valid: boolean; suggestion?: string }>({ valid: false });

  const handleChange = (val: string) => {
    setValue(val);
    if (touched) setResult(validateEmail(val));
  };

  const handleBlur = () => {
    setTouched(true);
    setResult(validateEmail(value));
  };

  const applySuggestion = () => {
    if (result.suggestion) {
      setValue(result.suggestion);
      setResult({ valid: true });
    }
  };

  const showError = touched && value.length > 0 && !result.valid;
  const showSuccess = touched && value.length > 0 && result.valid && !result.suggestion;

  return (
    <div>
      <label
        htmlFor="email"
        className="mb-2 block text-sm font-medium text-foreground"
      >
        Email
      </label>
      <div className="relative">
        <input
          type="email"
          id="email"
          name="email"
          required
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={handleBlur}
          className={`w-full rounded-xl border bg-white/5 px-4 py-3 pr-10 text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 ${
            showError
              ? "border-red-500/50 focus:border-red-500/50 focus:ring-1 focus:ring-red-500/25"
              : showSuccess
                ? "border-emerald-500/50 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/25"
                : "border-white/10 focus:border-accent/50 focus:ring-1 focus:ring-accent/25"
          }`}
          placeholder="tu@email.com"
        />
        {showError && (
          <AlertCircle className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-red-400" />
        )}
        {showSuccess && (
          <CheckCircle2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-400" />
        )}
      </div>
      <AnimatePresence>
        {showError && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-1.5 text-xs text-red-400"
          >
            Introduce un email válido (ej: nombre@dominio.com)
          </motion.p>
        )}
        {result.suggestion && touched && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-1.5 text-xs text-amber-400"
          >
            ¿Quisiste decir{" "}
            <button
              type="button"
              onClick={applySuggestion}
              className="font-semibold text-accent underline underline-offset-2 cursor-pointer"
            >
              {result.suggestion}
            </button>
            ?
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Custom Select ─── */
const options = [
  { value: "web", label: "Desarrollo Web" },
  { value: "software", label: "Software a Medida" },
  { value: "seguridad", label: "Ciberseguridad" },
  { value: "sistemas", label: "Sistemas e Infraestructura" },
  { value: "digitalizacion", label: "Digitalización" },
  { value: "otro", label: "Otro" },
];

function CustomSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between rounded-xl border bg-white/5 px-4 py-3 text-sm outline-none transition-colors cursor-pointer ${
          open
            ? "border-accent/50 ring-1 ring-accent/25"
            : "border-white/10"
        } ${selected ? "text-foreground" : "text-muted/50"}`}
      >
        <span>{selected ? selected.label : "Selecciona un servicio"}</span>
        <ChevronDown
          className={`h-4 w-4 text-muted transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-[#0f172a] shadow-xl shadow-black/40"
          >
            {options.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between px-4 py-3 text-sm transition-colors cursor-pointer ${
                    value === option.value
                      ? "bg-accent/10 text-accent"
                      : "text-foreground hover:bg-white/5"
                  }`}
                >
                  <span>{option.label}</span>
                  {value === option.value && (
                    <Check className="h-4 w-4 text-accent" />
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Contact Section ─── */
const COOLDOWN_MS = 30_000;

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "cooldown">("idle");
  const [subject, setSubject] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const lastSubmitRef = useRef(0);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!privacy) return;

    // Rate limit: 30s cooldown
    const now = Date.now();
    if (now - lastSubmitRef.current < COOLDOWN_MS) {
      setStatus("cooldown");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    lastSubmitRef.current = now;
    setStatus("sending");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", "0f6e6a40-b745-403e-8ef4-6326e0a0be86");
    formData.append("subject", `Nuevo contacto AntonTech: ${options.find(o => o.value === subject)?.label ?? "General"}`);
    formData.append("from_name", "AntonTech Web");
    if (subject) formData.append("service", subject);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
        setSubject("");
        setPrivacy(false);
        setFormKey((k) => k + 1);
        setTimeout(() => setStatus("idle"), COOLDOWN_MS);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contacto" className="relative py-24 sm:py-32">
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
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-heading text-base font-semibold text-foreground">
                  Ubicación
                </h4>
                <p className="mt-1 text-sm text-muted">Barcelona, España</p>
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
                    name="name"
                    required
                    maxLength={40}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent/50 focus:ring-1 focus:ring-accent/25"
                    placeholder="Tu nombre"
                  />
                </div>
                <EmailInput key={formKey} />
              </div>

              <div className="mt-6">
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Asunto
                </label>
                <CustomSelect value={subject} onChange={setSubject} />
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
                  name="message"
                  rows={5}
                  required
                  maxLength={2000}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent/50 focus:ring-1 focus:ring-accent/25"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              {/* Honeypot anti-spam */}
              <input type="checkbox" name="botcheck" className="hidden" />

              {/* RGPD checkbox */}
              <div className="mt-6 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={privacy}
                  onChange={(e) => setPrivacy(e.target.checked)}
                  className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border border-white/20 bg-white/5 accent-accent"
                  required
                />
                <label htmlFor="privacy" className="text-xs leading-relaxed text-muted cursor-pointer">
                  Acepto la{" "}
                  <a href="/privacidad" target="_blank" className="text-accent underline underline-offset-2 hover:text-accent/80">
                    política de privacidad
                  </a>
                  . Mis datos se usarán solo para responder a mi consulta y no
                  se compartirán con terceros.
                </label>
              </div>

              <button
                type="submit"
                disabled={status !== "idle" || !privacy}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-blue px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 disabled:opacity-50 cursor-pointer"
              >
                {status === "sending" && "Enviando..."}
                {status === "success" && "Mensaje enviado"}
                {status === "error" && "Error, inténtalo de nuevo"}
                {status === "cooldown" && "Espera antes de enviar otro mensaje"}
                {status === "idle" && (
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
