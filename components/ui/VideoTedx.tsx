"use client";

import { Play, X } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

type Props = {
  titulo: string;
  evento: string;
  fechaTexto: string | null;
  youtubeId: string | null;
  thumbnail: string | null;
};

/**
 * Tarjeta de charla TEDx con fachada (brief 6.7 y 14): se ve la miniatura y
 * el iframe de YouTube recién se crea al hacer clic, dentro de un <dialog>
 * nativo que ya trae Escape, foco atrapado y devolución del foco.
 * Sin youtubeId todavía, la tarjeta dice que el video está pendiente.
 */
export function VideoTedx({ titulo, evento, fechaTexto, youtubeId, thumbnail }: Props) {
  const dialogo = useRef<HTMLDialogElement>(null);
  const marco = useRef<HTMLDivElement>(null);

  const abrir = () => {
    if (!youtubeId || !dialogo.current || !marco.current) return;
    marco.current.innerHTML = "";
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`;
    iframe.title = `${evento}: ${titulo}`;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.className = "absolute inset-0 h-full w-full";
    marco.current.appendChild(iframe);
    dialogo.current.showModal();
  };

  // Al cerrar se destruye el iframe para que el video deje de sonar.
  const alCerrar = () => {
    if (marco.current) marco.current.innerHTML = "";
  };

  return (
    <figure className="m-0">
      <button
        type="button"
        onClick={abrir}
        disabled={!youtubeId}
        aria-label={youtubeId ? `Ver la charla: ${titulo}` : undefined}
        className="sticker group/video relative block aspect-video w-full overflow-hidden bg-bosque text-left disabled:cursor-default"
      >
        {thumbnail ? (
          <Image src={thumbnail} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-500 ease-[var(--ease-suave)] group-hover/video:scale-[1.03]" />
        ) : null}
        <span className="absolute inset-0 grid place-items-center">
          {youtubeId ? (
            <span className="grid size-20 place-items-center rounded-full border-2 border-tinta bg-beca text-bosque shadow-[3px_3px_0_var(--color-tinta)] transition-transform duration-200 group-hover/video:scale-110">
              <Play aria-hidden="true" className="ml-1 size-8" fill="currentColor" />
            </span>
          ) : (
            <span className="versalitas rounded-full bg-crema px-4 py-2 text-xs text-tinta">Video pendiente</span>
          )}
        </span>
      </button>
      <figcaption className="mt-4 flex flex-col gap-1">
        <span className="versalitas text-sm text-hoja">
          {evento}
          {fechaTexto ? ` · ${fechaTexto}` : ""}
        </span>
        <span className="font-[family-name:var(--font-titular)] text-h3 font-extrabold">{titulo}</span>
      </figcaption>

      <dialog
        ref={dialogo}
        onClose={alCerrar}
        aria-label={`${evento}: ${titulo}`}
        className="m-auto w-[min(92vw,960px)] bg-transparent p-0 backdrop:bg-tinta/85"
      >
        <form method="dialog" className="mb-3 flex justify-end">
          <button className="flex items-center gap-2 rounded-full bg-crema px-4 py-2 font-bold text-tinta">
            <X aria-hidden="true" className="size-5" /> Cerrar
          </button>
        </form>
        <div ref={marco} className="relative aspect-video w-full overflow-hidden rounded-[20px] bg-tinta" />
      </dialog>
    </figure>
  );
}
