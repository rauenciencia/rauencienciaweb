import type { Metadata } from "next";
import Image from "next/image";

import { Acordeon } from "@/components/ui/Acordeon";
import { Boton } from "@/components/ui/Boton";
import { Contador } from "@/components/ui/Contador";
import { CirculoMano, Corazon, Destellos, Estrella, FlechaCurva, Onda, Subrayado } from "@/components/ui/Doodles";
import { Marquee } from "@/components/ui/Marquee";
import { MigoImagen, POSES, type PoseMigo } from "@/components/ui/MigoImagen";
import { Pildora } from "@/components/ui/Pildora";
import { TarjetaSticker } from "@/components/ui/TarjetaSticker";
import { TituloSeccion } from "@/components/ui/TituloSeccion";
import { VideoTedx } from "@/components/ui/VideoTedx";
import { charlas, faq, fechaLarga, pendientesDeConfirmar, prensa, stats } from "@/lib/contenido";

export const metadata: Metadata = {
  title: "Sistema de diseño · rauenciencia",
  robots: { index: false, follow: false },
};

const PALETA = [
  { token: "bosque", hex: "#0F3D2E", rol: "Fondos oscuros, footer", texto: "text-crema" },
  { token: "hoja", hex: "#2F7A4B", rol: "Links, íconos, activo", texto: "text-crema" },
  { token: "brote", hex: "#9CCB4F", rol: "Píldoras, tags, chips", texto: "text-tinta" },
  { token: "beca", hex: "#F5C443", rol: "CTA primario, anuncio", texto: "text-bosque" },
  { token: "durazno", hex: "#FACC9C", rol: "Superficies cálidas", texto: "text-tinta" },
  { token: "crema", hex: "#FCF5E5", rol: "Fondo base", texto: "text-tinta" },
  { token: "papel", hex: "#FFFDF7", rol: "Tarjetas sobre crema", texto: "text-tinta" },
  { token: "tinta", hex: "#1F2A10", rol: "Texto y contornos", texto: "text-crema" },
  { token: "match-700", hex: "#C8323A", rol: "Match accesible", texto: "text-papel" },
  { token: "rau", hex: "#6E3A6B", rol: "Lo personal", texto: "text-crema" },
];

const TARJETAS: { titulo: string; texto: string; pose: PoseMigo; fondo: "papel" | "durazno" | "brote" | "beca"; rotacion: number }[] = [
  { titulo: "Tinder de Becas", texto: "Desliza, guarda y postula. +500 oportunidades, gratis.", pose: "code-celular", fondo: "papel", rotacion: -4 },
  { titulo: "Charlas y conferencias", texto: "Llévame a tu cole, uni, empresa o evento.", pose: "megafono", fondo: "durazno", rotacion: 3 },
  { titulo: "Asesorías 1:1", texto: "Tu postulación, revisada conmigo.", pose: "pensativo", fondo: "brote", rotacion: -2 },
  { titulo: "Recursos gratis", texto: "Roadmap, guías y plantillas para empezar hoy.", pose: "idea-foco", fondo: "beca", rotacion: 4 },
];

function Bloque({ titulo, nota, children, oscuro = false }: { titulo: string; nota?: string; children: React.ReactNode; oscuro?: boolean }) {
  return (
    <section className={`px-5 py-16 sm:px-8 ${oscuro ? "superficie-oscura trama-migas-oscura bg-bosque text-crema" : ""}`}>
      <div className="mx-auto flex max-w-[78rem] flex-col gap-8">
        <header className="flex flex-col gap-2">
          <h2 className="m-0 text-h3">{titulo}</h2>
          {nota ? <p className={`prosa m-0 ${oscuro ? "text-crema/85" : "text-tinta/80"}`}>{nota}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}

export default function Sistema() {
  const pendientes = pendientesDeConfirmar();
  const poses = Object.keys(POSES) as PoseMigo[];

  return (
    <div className="pt-10">
      <section className="px-5 sm:px-8">
        <div className="mx-auto flex max-w-[78rem] flex-col gap-6 pt-6 pb-4">
          <TituloSeccion nivel="h1" linea="Fase 1:" pildora="fundaciones" />
          <p className="prosa text-xl">
            Todo el sistema del Cuaderno migajero en una sola página, para que lo revises antes de armar la
            home. Esta página no aparece en Google y se borra al terminar el rediseño.
          </p>
        </div>
      </section>

      <Bloque titulo="Lo que falta que me pases" nota="Sale solo de /content: cada vez que llenas un dato, desaparece de esta lista.">
        <ul className="grid gap-2 sm:grid-cols-2">
          {pendientes.map((item) => (
            <li key={item} className="rounded-xl border-2 border-dashed border-tinta/30 bg-papel px-4 py-3 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </Bloque>

      <Bloque titulo="Paleta" nota="60 % crema y papel, 25 % bosque, 10 % beca y brote, 5 % el resto. Nunca amarillo sobre crema para texto.">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {PALETA.map((color) => (
            <li key={color.token} className="sticker overflow-hidden bg-papel">
              <div className={`flex h-24 items-end p-3 font-bold ${color.texto}`} style={{ backgroundColor: color.hex }}>
                Aa
              </div>
              <div className="flex flex-col p-3 text-sm">
                <span className="font-bold">{color.token}</span>
                <span className="font-mono text-xs">{color.hex}</span>
                <span className="text-tinta/75">{color.rol}</span>
              </div>
            </li>
          ))}
        </ul>
      </Bloque>

      <Bloque titulo="Tipografía">
        <div className="flex flex-col gap-6">
          <p className="m-0 font-[family-name:var(--font-titular)] text-h1 font-extrabold tracking-[-0.02em]">Bricolage Grotesque</p>
          <p className="cartel m-0 text-6xl">Escuelita Migajera · 26/09</p>
          <p className="prosa m-0 text-lg">
            DM Sans para leer de corrido. Becas reales, verificadas y con el link oficial listo para postular.
            Deslizas, armas tu lista, y tienes todas tus becas en un solo lugar.
          </p>
          <p className="mano m-0 text-3xl text-hoja">¡este soy yo en el TEDx!</p>
        </div>
      </Bloque>

      <Bloque titulo="Titulares con píldora" nota="La píldora se dibuja de izquierda a derecha y después se inclina. Baja y vuelve a subir para verla otra vez al recargar.">
        <TituloSeccion linea="Descubre lo que tengo para ti" pildora="¡empieza aquí!" tono="brote" />
        <TituloSeccion linea="No es una brecha de talento." pildora="Es una brecha de información." />
      </Bloque>

      <Bloque titulo="Botones">
        <div className="flex flex-wrap items-center gap-4">
          <Boton href="/" tamano="grande">Hacer match con mi beca →</Boton>
          <Boton href="/sobre-mi" variante="secundario" tamano="grande">Conóceme</Boton>
          <Boton href="/contacto" variante="oscuro">Llévame a tu evento</Boton>
          <Boton pendiente>¡Claro que sí!</Boton>
          <Pildora>Migajeamos becas.</Pildora>
          <Pildora tono="brote">sin pagarles, lo juro</Pildora>
        </div>
      </Bloque>

      <Bloque titulo="Tarjetas sticker" nota="Así se va a ver “Empieza aquí” en la home. Pasa el cursor: se enderezan, suben y MIGO salta.">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TARJETAS.map((tarjeta) => (
            <TarjetaSticker key={tarjeta.titulo} fondo={tarjeta.fondo} rotacion={tarjeta.rotacion} className="flex flex-col gap-3 p-6">
              <div className="h-32 transition-transform duration-300 ease-[var(--ease-suave)] group-hover/sticker:-translate-y-2">
                <MigoImagen pose={tarjeta.pose} ancho={110} className="h-32 w-auto" />
              </div>
              <h3 className="m-0 text-h3">{tarjeta.titulo}</h3>
              <p className="m-0">{tarjeta.texto}</p>
            </TarjetaSticker>
          ))}
        </div>
      </Bloque>

      <Bloque titulo="Cifras" nota="Cuentan de cero al entrar en pantalla, una sola vez. Las marcadas con * están por confirmar.">
        <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((cifra) => (
            <li key={cifra.etiqueta} className="flex flex-col gap-1">
              <Contador valor={cifra.numero} prefijo={cifra.prefijo} sufijo={cifra.sufijo} className="text-6xl text-bosque sm:text-7xl" />
              <span className="text-lg">
                {cifra.etiqueta}
                {cifra.confirmar ? " *" : ""}
              </span>
            </li>
          ))}
        </ul>
      </Bloque>

      <Onda desde="var(--color-crema)" hacia="var(--color-bosque)" />
      <Bloque oscuro titulo="Salí en" nota="Cinta de prensa en loop. Se pausa al pasar el cursor. Cada nombre lleva a su nota.">
        <Marquee
          etiqueta="Medios donde salí"
          items={prensa.map((nota) => (
            <a key={nota.url} href={nota.url} target="_blank" rel="noopener noreferrer" className="cartel text-4xl text-crema no-underline hover:text-beca">
              {nota.medio}
            </a>
          ))}
        />
      </Bloque>
      <Onda desde="var(--color-bosque)" hacia="var(--color-crema)" invertida />

      <Bloque titulo="Garabatos" nota="Se dibujan solos al entrar en pantalla.">
        <div className="flex flex-wrap items-center gap-10">
          <Estrella tono="beca" className="size-12" />
          <Destellos tono="tinta" className="size-12" />
          <FlechaCurva tono="hoja" className="h-14 w-28" />
          <Subrayado tono="beca" className="h-6 w-56" grosor={5} />
          <CirculoMano tono="match" className="h-20 w-44" />
          <Corazon tono="match" className="size-10" />
        </div>
      </Bloque>

      <Bloque titulo="Charlas TEDx" nota="El video se carga recién al hacer clic. Mientras no tengamos el link de YouTube, la tarjeta dice que está pendiente.">
        <div className="grid gap-10 md:grid-cols-2">
          {charlas.tedx.map((charla) => (
            <VideoTedx key={charla.evento} {...charla} fechaTexto={fechaLarga(charla.fecha)} />
          ))}
        </div>
      </Bloque>

      <Bloque titulo="Fotos" nota="Tratamiento polaroid con nota a mano. Las tres fotos que me pasaste.">
        <div className="grid gap-10 sm:grid-cols-3">
          {[
            { src: "/fotos/tedx-camacho-escenario.jpg", nota: "TEDxCamacho Youth", alt: "Raúl en el escenario de TEDxCamacho Youth frente a la pregunta “¿Cuántas soluciones estamos descartando día a día?”", giro: -3 },
            { src: "/fotos/tedx-camacho-titulo.jpg", nota: "“Biotecnología de la basura”", alt: "Raúl en el círculo rojo de TEDxCamacho Youth, con el título de su charla en pantalla", giro: 2 },
            { src: "/fotos/podcast-prelanzamiento.jpg", nota: "prelanzamiento del podcast", alt: "Raúl con estudiantes en un auditorio, en el prelanzamiento del podcast Ambientalmente Incorrectos", giro: -1.5 },
          ].map((foto) => (
            <figure key={foto.src} className="m-0 bg-papel p-3 pb-4 shadow-[4px_4px_0_var(--color-tinta)] ring-2 ring-tinta" style={{ rotate: `${foto.giro}deg` }}>
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image src={foto.src} alt={foto.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mano pt-3 text-center text-2xl text-tinta">{foto.nota}</figcaption>
            </figure>
          ))}
        </div>
      </Bloque>

      <Bloque titulo="Preguntas frecuentes">
        <Acordeon preguntas={faq.filter((item) => item.pagina === "home")} />
      </Bloque>

      <Bloque titulo="Las 19 poses de MIGO" nota="Catálogo interno. En la web va máximo un MIGO por pantalla.">
        <ul className="grid grid-cols-3 gap-6 sm:grid-cols-5 lg:grid-cols-7">
          {poses.map((pose) => (
            <li key={pose} className="flex flex-col items-center gap-2 text-center text-xs">
              <MigoImagen pose={pose} ancho={96} className="h-28 w-auto object-contain" />
              <span>{pose}</span>
            </li>
          ))}
        </ul>
      </Bloque>
    </div>
  );
}
