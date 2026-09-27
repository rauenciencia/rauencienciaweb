import Link from "next/link";

import { MigoAsomado } from "@/components/layout/MigoAsomado";
import { Onda } from "@/components/ui/Doodles";
import { IconoRed } from "@/components/ui/IconosRedes";
import { site } from "@/lib/contenido";
import { aprende, urlPlataforma } from "@/lib/sitio";

const explora = [
  { rotulo: "Tinder de Becas", href: urlPlataforma },
  { rotulo: "Charlas", href: "/charlas" },
  { rotulo: "Agenda", href: "/agenda" },
  { rotulo: "Asesorías", href: "/asesorias" },
];

function Columna({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="versalitas m-0 text-sm font-bold tracking-[0.14em] text-brote">{titulo}</h2>
      {children}
    </div>
  );
}

function Pendiente({ que }: { que: string }) {
  return <span className="text-crema/70">[PLACEHOLDER {que}]</span>;
}

/**
 * Footer de cuatro columnas (brief 5), en verde bosque con la trama de migas.
 * MIGO se asoma por el borde de arriba cuando llegas al final de la página.
 */
export function Pie() {
  const anio = new Date().getFullYear();

  return (
    <footer className="no-imprimir relative mt-24">
      <MigoAsomado />
      <Onda desde="var(--color-crema)" hacia="var(--color-bosque)" />
      <div className="superficie-oscura trama-migas-oscura bg-bosque px-5 pt-14 pb-8 text-crema sm:px-8">
        <div className="mx-auto grid max-w-[78rem] gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-5">
            <p className="font-[family-name:var(--font-titular)] text-3xl font-extrabold tracking-tight">rauenciencia</p>
            <p className="prosa max-w-xs text-lg text-crema/90">{site.lema}</p>
            <ul className="flex flex-wrap gap-2">
              {site.redes.map((red) => (
                <li key={red.usuario}>
                  {red.url ? (
                    <a
                      href={red.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${red.nombre} ${red.usuario}`}
                      title={`${red.nombre} ${red.usuario}`}
                      className="grid size-11 place-items-center rounded-full border-2 border-crema/40 text-crema transition-colors hover:border-beca hover:bg-beca hover:text-bosque"
                    >
                      <IconoRed nombre={red.nombre} className="size-5" />
                    </a>
                  ) : (
                    <span
                      title={`${red.usuario}: link pendiente`}
                      className="grid size-11 place-items-center rounded-full border-2 border-dashed border-crema/40 text-crema/60"
                    >
                      <IconoRed nombre={red.nombre} className="size-5" />
                      <span className="sr-only">{red.usuario}: link pendiente</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <Columna titulo="Explora">
            <ul className="flex flex-col gap-2">
              {explora.map((item) => (
                <li key={item.rotulo}>
                  <a href={item.href} className="text-crema/90 no-underline hover:text-beca hover:underline">
                    {item.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </Columna>

          <Columna titulo="Aprende">
            <ul className="flex flex-col gap-2">
              {aprende.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-crema/90 no-underline hover:text-beca hover:underline">
                    {item.rotulo}
                  </Link>
                </li>
              ))}
            </ul>
          </Columna>

          <Columna titulo="Contacto">
            <ul className="flex flex-col gap-2 text-crema/90">
              <li>{site.email ? <a href={`mailto:${site.email}`} className="text-crema/90 hover:text-beca">{site.email}</a> : <Pendiente que="email" />}</li>
              <li>{site.whatsapp ? <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-crema/90 hover:text-beca">WhatsApp</a> : <Pendiente que="WhatsApp" />}</li>
              <li>{site.ciudad}</li>
              <li className="flex gap-4 pt-2">
                <Link href="/prensa" className="text-crema/90 hover:text-beca">Prensa</Link>
                <Link href="/en" className="text-crema/90 hover:text-beca" hrefLang="en">English</Link>
              </li>
            </ul>
          </Columna>
        </div>

        <div className="mx-auto mt-14 flex max-w-[78rem] flex-col gap-3 border-t-2 border-crema/20 pt-6 text-sm text-crema/80 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">
            Hecho con 💚 en Lima, una migaja a la vez · © {anio} {site.nombre}
          </p>
          <p className="m-0 flex gap-4">
            <Link href="/legal/privacidad" className="text-crema/80 hover:text-beca">Privacidad</Link>
            <Link href="/legal/terminos" className="text-crema/80 hover:text-beca">Términos</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
