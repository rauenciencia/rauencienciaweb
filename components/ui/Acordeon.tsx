"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

type Pregunta = { pregunta: string; respuesta: string };

/**
 * Acordeón de preguntas frecuentes. Uno abierto a la vez; el alto se anima
 * con grid-template-rows, sin medir nada en JavaScript. Para Google, la
 * página que lo usa debe sumar `faqJsonLd` con las mismas preguntas.
 */
export function Acordeon({ preguntas, sobreOscuro = false }: { preguntas: Pregunta[]; sobreOscuro?: boolean }) {
  const [abierta, setAbierta] = useState<number | null>(null);
  const base = useId();
  const linea = sobreOscuro ? "border-crema/30" : "border-tinta/20";

  return (
    <div className={`border-t-2 ${linea}`}>
      {preguntas.map((item, indice) => {
        const estaAbierta = abierta === indice;
        const idBoton = `${base}-b${indice}`;
        const idPanel = `${base}-p${indice}`;
        return (
          <div key={item.pregunta} className={`border-b-2 ${linea}`}>
            <h3 className="m-0 font-[family-name:var(--font-texto)] text-lg font-bold tracking-normal sm:text-xl">
              <button
                id={idBoton}
                type="button"
                aria-expanded={estaAbierta}
                aria-controls={idPanel}
                onClick={() => setAbierta(estaAbierta ? null : indice)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                {item.pregunta}
                <ChevronDown
                  aria-hidden="true"
                  className={`size-6 shrink-0 transition-transform duration-300 ease-[var(--ease-suave)] ${estaAbierta ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            <div
              id={idPanel}
              role="region"
              aria-labelledby={idBoton}
              className={`grid transition-[grid-template-rows] duration-300 ease-[var(--ease-suave)] ${estaAbierta ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden" inert={!estaAbierta || undefined}>
                <p className="prosa pb-6 text-lg">{item.respuesta}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Datos estructurados FAQPage (brief 14) para las mismas preguntas. */
export function faqJsonLd(preguntas: Pregunta[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: preguntas.map((item) => ({
      "@type": "Question",
      name: item.pregunta,
      acceptedAnswer: { "@type": "Answer", text: item.respuesta },
    })),
  };
}
