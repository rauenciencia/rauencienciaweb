import { ImageResponse } from "next/og";

import { perfil } from "@/content/perfil";

export const alt = `${perfil.nombre} — ${perfil.alias}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * La tarjeta que se ve cuando alguien pega el enlace en WhatsApp o en X.
 * Es el mismo cartel, recortado al formato: tinta de durazno plana, titular
 * condensado a sangre, y las cifras al pie.
 */
async function cargarFuente(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Big+Shoulders:wght@800&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } },
    ).then((respuesta) => respuesta.text());

    const url = css.match(/src: url\((https:\/\/[^)]+)\)/)?.[1];
    if (!url) return null;

    return await fetch(url).then((respuesta) => respuesta.arrayBuffer());
  } catch {
    // Sin red al generar la imagen: se usa la tipografía de respaldo.
    return null;
  }
}

export default async function Imagen() {
  const fuente = await cargarFuente();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#D9967A",
          color: "#1C2130",
          padding: "64px 72px",
          fontFamily: fuente ? "Cartel" : "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, letterSpacing: "0.14em", fontWeight: 800 }}>
          {perfil.handle.toUpperCase()}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 118,
            lineHeight: 0.86,
            textTransform: "uppercase",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          {perfil.titular.map((linea) => (
            <div key={linea} style={{ display: "flex" }}>
              {linea}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: 56,
            borderTop: "6px solid #1C2130",
            paddingTop: 24,
            fontSize: 30,
            fontWeight: 800,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          {perfil.cifras.map((cifra) => (
            <div key={cifra.concepto} style={{ display: "flex" }}>
              {cifra.numero} {cifra.concepto}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fuente
        ? [{ name: "Cartel", data: fuente, weight: 800 as const, style: "normal" as const }]
        : [],
    },
  );
}
