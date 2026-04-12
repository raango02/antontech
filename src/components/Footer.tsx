import { Code2, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#030303]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-blue">
              <span className="font-heading text-sm font-bold text-white">A</span>
            </div>
            <span className="font-heading text-lg font-bold text-foreground">
              Anton<span className="text-accent">Tech</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted">
            <a
              href="#inicio"
              className="transition-colors hover:text-foreground cursor-pointer"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="transition-colors hover:text-foreground cursor-pointer"
            >
              Servicios
            </a>
            <a
              href="#nosotros"
              className="transition-colors hover:text-foreground cursor-pointer"
            >
              Nosotros
            </a>
            <a
              href="#contacto"
              className="transition-colors hover:text-foreground cursor-pointer"
            >
              Contacto
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-400">
              <Code2 className="h-4 w-4" />
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-blue-400">
              <ShieldCheck className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-white/[0.06] pt-8 text-center">
          <p className="text-xs text-muted/60">
            &copy; {new Date().getFullYear()} AntonTech. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
