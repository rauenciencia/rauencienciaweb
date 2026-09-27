"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Flecha } from "./Flecha";
import { Migo } from "./Migo";
import { perfil } from "@/content/perfil";

const CLAVE = "rau_aviso_v1";
const RETRASO = 700;

/**
 * EL AVISO.
 *
 * Un cartel pegado encima del cartel. Aparece al entrar porque la mayoría de
 * la gente llega desde un enlace en bio y se va en segundos: si no ve la
 * plataforma ahí, no la ve nunca.
 *
 * Lo que lo hace tolerable y no una plaga:
 * - sale una sola vez por navegador y no vuelve si ya lo cerraste;
 * - se cierra con Escape, con el fondo, y con un botón que dice lo que hace;
 * - el foco entra, se queda adentro mientras está abierto, y vuelve al salir;
 * - si el navegador bloquea el almacenamiento, el aviso simplemente no sale.
 */
export function Aviso({ urlPlataforma }: { urlPlataforma: string }) {
  const [abierto, setAbierto] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const focoPrevio = useRef<HTMLElement | null>(null);

  const cerrar = useCallback((decision: "visto" | "entro") => {
    setAbierto(false);
    try {
      window.localStorage.setItem(CLAVE, decision);
    } catch {
      // Navegación privada o almacenamiento bloqueado: no pasa nada.
    }
    focoPrevio.current?.focus();
  }, []);

  useEffect(() => {
    let guardado: string | null = null;
    try {
      guardado = window.localStorage.getItem(CLAVE);
    } catch {
      // Sin acceso al almacenamiento no podemos recordar la decisión, y un
      // aviso que reaparece en cada carga es peor que no tenerlo.
      return;
    }
    if (guardado) return;

    const reloj = window.setTimeout(() => {
      focoPrevio.current = document.activeElement as HTMLElement | null;
      setAbierto(true);
    }, RETRASO);

    return () => window.clearTimeout(reloj);
  }, []);

  useEffect(() => {
    document.body.dataset.aviso = abierto ? "abierto" : "cerrado";
    if (!abierto) return;

    panel.current?.querySelector<HTMLElement>("a, button")?.focus();

    const alTeclear = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") {
        cerrar("visto");
        return;
      }
      if (evento.key !== "Tab" || !panel.current) return;

      const focables = panel.current.querySelectorAll<HTMLElement>("a[href], button");
      if (focables.length === 0) return;

      const primero = focables[0];
      const ultimo = focables[focables.length - 1];

      if (evento.shiftKey && document.activeElement === primero) {
        evento.preventDefault();
        ultimo.focus();
      } else if (!evento.shiftKey && document.activeElement === ultimo) {
        evento.preventDefault();
        primero.focus();
      }
    };

    document.addEventListener("keydown", alTeclear);
    return () => document.removeEventListener("keydown", alTeclear);
  }, [abierto, cerrar]);

  if (!abierto) return null;

  return (
    <div
      className="no-imprimir fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="aviso-titulo"
    >
      <button
        type="button"
        aria-label="Cerrar el aviso"
        onClick={() => cerrar("visto")}
        className="aviso-fondo absolute inset-0 -z-10 w-full cursor-default bg-tinta/80"
      />

      <div
        ref={panel}
        className="aviso-papel campo-azul trama relative mt-20 w-full max-w-[36rem] border-[4px] border-tinta bg-naranja text-tinta sm:mt-24"
      >
        {/* Migo se asoma por el borde del papel, como una calcomanía pegada
            encima del aviso. Es donde su movimiento se lee mejor. */}
        <div className="pointer-events-none absolute -top-[4.5rem] right-4 sm:-top-[5.5rem] sm:right-6">
          <div className="pointer-events-auto">
            <Migo ancho={112} retraso={260} className="sm:hidden" />
            <Migo ancho={140} retraso={260} className="hidden sm:block" />
          </div>
        </div>

        <div className="flex flex-col gap-6 p-6 sm:p-8">
          <div className="flex flex-col gap-3">
            <h2
              id="aviso-titulo"
              className="cartel max-w-[11ch] text-[clamp(2rem,7vw,3.25rem)] leading-none"
            >
              {perfil.aviso.titulo}
            </h2>
            <p className="text-base leading-snug font-medium sm:text-lg">{perfil.aviso.texto}</p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={urlPlataforma}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => cerrar("entro")}
              className="cartel flex items-center justify-between gap-4 bg-tinta px-5 py-4 text-[clamp(1.35rem,4.5vw,1.9rem)] leading-none text-papel no-underline transition-colors hover:bg-azul"
            >
              {perfil.aviso.accion}
              <Flecha className="h-[0.75em] w-[0.75em] shrink-0" />
            </a>

            <button
              type="button"
              onClick={() => cerrar("visto")}
              className="rotulo self-start text-sm underline decoration-[3px] underline-offset-[6px] hover:no-underline"
            >
              {perfil.aviso.rechazo}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
