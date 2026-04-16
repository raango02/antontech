import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Política de Privacidad | AntonTech",
  description: "Política de privacidad y protección de datos de AntonTech.",
};

export default function Privacidad() {
  return (
    <div className="relative min-h-screen bg-[#030303]">
      {/* Navbar mini */}
      <nav className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-6xl rounded-2xl border border-white/10 bg-[#030303]/80 shadow-lg shadow-black/20 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Image src="/logo.png" alt="AntonTech" width={36} height={36} className="h-9 w-9" />
            <span className="font-heading text-lg font-bold text-[#f8fafc]">
              Anton<span className="text-[#06b6d4]">Tech</span>
            </span>
          </Link>
          <Link
            href="/"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#f8fafc] transition-colors hover:border-white/20 hover:bg-white/10 cursor-pointer"
          >
            Volver al inicio
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="relative z-10 mx-auto max-w-3xl px-6 pb-20 pt-32">
        <div className="mb-12">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-[#06b6d4]">
            Legal
          </span>
          <h1 className="font-heading text-4xl font-bold text-[#f8fafc] sm:text-5xl">
            Política de Privacidad
          </h1>
          <p className="mt-4 text-[#94a3b8]">
            Última actualización: abril 2026
          </p>
        </div>

        <div className="space-y-10 text-[#94a3b8] [&_h2]:mb-4 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[#f8fafc] [&_p]:leading-relaxed [&_ul]:ml-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_li]:leading-relaxed">
          <section>
            <h2>1. Responsable del tratamiento</h2>
            <p>
              El responsable del tratamiento de los datos personales recogidos a
              través de esta web es <strong className="text-[#f8fafc]">AntonTech</strong>,
              con domicilio en Barcelona, España.
            </p>
            <p className="mt-2">
              Contacto:{" "}
              <a
                href="mailto:info.antontech@gmail.com"
                className="text-[#06b6d4] transition-colors hover:text-[#06b6d4]/80"
              >
                info.antontech@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2>2. Datos que recogemos</h2>
            <p>
              A través del formulario de contacto de esta web recogemos
              únicamente los siguientes datos:
            </p>
            <ul>
              <li>Nombre</li>
              <li>Dirección de correo electrónico</li>
              <li>Asunto de la consulta</li>
              <li>Mensaje</li>
            </ul>
          </section>

          <section>
            <h2>3. Finalidad del tratamiento</h2>
            <p>
              Los datos recogidos se utilizan exclusivamente para responder a tu
              consulta o solicitud de información sobre nuestros servicios. No
              utilizamos tus datos para ningún otro fin, ni enviamos
              comunicaciones comerciales no solicitadas.
            </p>
          </section>

          <section>
            <h2>4. Base legal</h2>
            <p>
              La base legal para el tratamiento de tus datos es tu{" "}
              <strong className="text-[#f8fafc]">consentimiento explícito</strong>,
              que otorgas al marcar la casilla de aceptación en el formulario de
              contacto antes de enviar tus datos.
            </p>
          </section>

          <section>
            <h2>5. Destinatarios</h2>
            <p>
              Tus datos <strong className="text-[#f8fafc]">no se comparten con terceros</strong>.
              El formulario de contacto utiliza el servicio Web3Forms como
              intermediario técnico para el envío. Este servicio actúa como relay
              y no almacena los datos enviados en sus servidores.
            </p>
          </section>

          <section>
            <h2>6. Conservación de datos</h2>
            <p>
              Los datos recibidos a través del formulario se conservan
              únicamente el tiempo necesario para responder a tu consulta. Una
              vez resuelta, los datos se eliminan.
            </p>
          </section>

          <section>
            <h2>7. Tus derechos</h2>
            <p>
              De acuerdo con el Reglamento General de Protección de Datos (RGPD),
              tienes derecho a:
            </p>
            <ul>
              <li>
                <strong className="text-[#f8fafc]">Acceso:</strong> solicitar
                una copia de los datos que tenemos sobre ti.
              </li>
              <li>
                <strong className="text-[#f8fafc]">Rectificación:</strong> corregir
                datos inexactos o incompletos.
              </li>
              <li>
                <strong className="text-[#f8fafc]">Eliminación:</strong> solicitar
                la eliminación de tus datos.
              </li>
              <li>
                <strong className="text-[#f8fafc]">Oposición:</strong> oponerte
                al tratamiento de tus datos.
              </li>
              <li>
                <strong className="text-[#f8fafc]">Portabilidad:</strong> recibir
                tus datos en un formato estructurado.
              </li>
            </ul>
            <p className="mt-4">
              Para ejercer cualquiera de estos derechos, escríbenos a{" "}
              <a
                href="mailto:info.antontech@gmail.com"
                className="text-[#06b6d4] transition-colors hover:text-[#06b6d4]/80"
              >
                info.antontech@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2>8. Cookies</h2>
            <p>
              Esta web <strong className="text-[#f8fafc]">no utiliza cookies</strong> de
              ningún tipo. No hay cookies de análisis, publicidad ni seguimiento.
            </p>
          </section>

          <section>
            <h2>9. Seguridad</h2>
            <p>
              Aplicamos medidas técnicas y organizativas para proteger tus datos
              contra el acceso no autorizado, la pérdida o la destrucción. La
              comunicación con esta web se realiza mediante protocolo HTTPS.
            </p>
          </section>

          <section>
            <h2>10. Modificaciones</h2>
            <p>
              Nos reservamos el derecho a actualizar esta política de privacidad.
              Cualquier cambio se publicará en esta misma página con la fecha de
              última actualización.
            </p>
          </section>
        </div>
      </main>

      {/* Footer mini */}
      <footer className="relative border-t border-white/[0.06] py-8">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs text-[#94a3b8]/60">
            &copy; {new Date().getFullYear()} AntonTech. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
