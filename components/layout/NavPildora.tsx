"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { MigoImagen } from "@/components/ui/MigoImagen";
import { aprende, navegacion, navegacionFinal } from "@/lib/sitio";

/** La marca en la píldora: tres migas y el nombre. El isotipo real llega con el SVG de Migajeando. */
function Marca() {
  return (
    <Link href="/" className="flex items-center gap-2 rounded-full no-underline" aria-label="rauenciencia, inicio">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 text-hoja">
        <circle cx="8" cy="13" r="3.4" fill="currentColor" />
        <circle cx="15.5" cy="8.5" r="2.5" fill="currentColor" />
        <circle cx="15" cy="16.5" r="1.9" fill="currentColor" />
      </svg>
      <span className="font-[family-name:var(--font-titular)] text-lg font-extrabold tracking-tight text-bosque">rauenciencia</span>
    </Link>
  );
}

function EnlaceNav({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  const ruta = usePathname();
  const activo = href !== "/" && ruta.startsWith(href);
  const externo = /^https?:\/\//.test(href);
  const clases = `rounded-full px-3 py-2 font-medium no-underline transition-colors hover:bg-crema ${activo ? "text-hoja" : "text-tinta"}`;
  return externo ? (
    <a href={href} className={clases} onClick={onClick}>
      {children}
    </a>
  ) : (
    <Link href={href} className={clases} aria-current={activo ? "page" : undefined} onClick={onClick}>
      {children}
    </Link>
  );
}

/**
 * Nav píldora flotante (brief 5 y M10). Blanca, centrada, fija al hacer
 * scroll. Pasados 80 px se compacta; si bajas rápido se esconde, y reaparece
 * en cuanto subes. En móvil, el botón abre un menú a pantalla completa en
 * verde bosque con MIGO saludando.
 */
export function NavPildora() {
  const [compacta, setCompacta] = useState(false);
  const [oculta, setOculta] = useState(false);
  const [aprendeAbierto, setAprendeAbierto] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const sinMovimiento = useReducedMotion();
  const ruta = usePathname();
  const aprendeRef = useRef<HTMLLIElement>(null);
  const botonMenu = useRef<HTMLButtonElement>(null);
  const panelMenu = useRef<HTMLDivElement>(null);

  // Compactar y esconder según el scroll.
  useEffect(() => {
    let anterior = window.scrollY;
    const alScroll = () => {
      const y = window.scrollY;
      const delta = y - anterior;
      setCompacta(y > 80);
      if (delta > 12 && y > 240) setOculta(true);
      else if (delta < -4) setOculta(false);
      anterior = y;
    };
    window.addEventListener("scroll", alScroll, { passive: true });
    return () => window.removeEventListener("scroll", alScroll);
  }, []);

  // Al cambiar de página se cierra todo.
  useEffect(() => {
    setMenuAbierto(false);
    setAprendeAbierto(false);
  }, [ruta]);

  // "Aprende" se cierra con Escape o al hacer clic fuera.
  useEffect(() => {
    if (!aprendeAbierto) return;
    const fuera = (evento: MouseEvent) => {
      if (!aprendeRef.current?.contains(evento.target as Node)) setAprendeAbierto(false);
    };
    const tecla = (evento: KeyboardEvent) => evento.key === "Escape" && setAprendeAbierto(false);
    document.addEventListener("mousedown", fuera);
    document.addEventListener("keydown", tecla);
    return () => {
      document.removeEventListener("mousedown", fuera);
      document.removeEventListener("keydown", tecla);
    };
  }, [aprendeAbierto]);

  // Menú móvil: bloquea el scroll de atrás, atrapa el foco y cierra con Escape.
  useEffect(() => {
    if (!menuAbierto) return;
    document.body.style.overflow = "hidden";
    panelMenu.current?.querySelector<HTMLElement>("a, button")?.focus();
    const tecla = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") {
        setMenuAbierto(false);
        botonMenu.current?.focus();
      }
      if (evento.key !== "Tab" || !panelMenu.current) return;
      const focables = panelMenu.current.querySelectorAll<HTMLElement>("a, button");
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
    document.addEventListener("keydown", tecla);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", tecla);
    };
  }, [menuAbierto]);

  return (
    <>
      <header
        className={`no-imprimir sticky z-40 px-3 transition-[top,transform] duration-300 ease-[var(--ease-suave)] ${compacta ? "top-2" : "top-4"} ${oculta && !menuAbierto && !sinMovimiento ? "-translate-y-[160%]" : ""}`}
      >
        <nav
          aria-label="Principal"
          className={`mx-auto flex max-w-[64rem] items-center justify-between gap-3 rounded-full border-2 border-tinta bg-papel transition-[padding,box-shadow] duration-300 ${compacta ? "px-3 py-1.5 shadow-[2px_2px_0_var(--color-tinta)]" : "px-4 py-2.5 shadow-[4px_4px_0_var(--color-tinta)]"}`}
        >
          <Marca />

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navegacion.map((item) => (
              <li key={item.rotulo}>
                <EnlaceNav href={item.href}>{item.rotulo}</EnlaceNav>
              </li>
            ))}
            <li className="relative" ref={aprendeRef}>
              <button
                type="button"
                aria-expanded={aprendeAbierto}
                aria-controls="menu-aprende"
                onClick={() => setAprendeAbierto((abierto) => !abierto)}
                className="flex items-center gap-1 rounded-full px-3 py-2 font-medium hover:bg-crema"
              >
                Aprende
                <ChevronDown aria-hidden="true" className={`size-4 transition-transform ${aprendeAbierto ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {aprendeAbierto ? (
                  <motion.ul
                    id="menu-aprende"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="sticker absolute top-[calc(100%+0.75rem)] left-1/2 w-72 -translate-x-1/2 bg-papel p-2"
                  >
                    {aprende.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="flex flex-col rounded-xl px-4 py-3 no-underline hover:bg-crema">
                          <span className="font-bold text-tinta">{item.rotulo}</span>
                          <span className="text-sm text-tinta/75">{item.detalle}</span>
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                ) : null}
              </AnimatePresence>
            </li>
            <li>
              <EnlaceNav href={navegacionFinal.href}>{navegacionFinal.rotulo}</EnlaceNav>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/contacto"
              className="rounded-full border-2 border-tinta bg-beca px-4 py-2 font-bold text-bosque no-underline transition-transform active:scale-[0.97]"
            >
              Hablemos
            </Link>
            <button
              ref={botonMenu}
              type="button"
              aria-expanded={menuAbierto}
              aria-controls="menu-movil"
              aria-label={menuAbierto ? "Cerrar el menú" : "Abrir el menú"}
              onClick={() => setMenuAbierto((abierto) => !abierto)}
              className="grid size-10 place-items-center rounded-full border-2 border-tinta lg:hidden"
            >
              {menuAbierto ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuAbierto ? (
          <motion.div
            id="menu-movil"
            ref={panelMenu}
            role="dialog"
            aria-modal="true"
            aria-label="Menú"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="superficie-oscura trama-migas-oscura fixed inset-0 z-[35] flex flex-col overflow-y-auto bg-bosque px-6 pt-28 pb-6 text-crema lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {[...navegacion, navegacionFinal].map((item, indice) => (
                <motion.li
                  key={item.rotulo}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * indice, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a href={item.href} className="block py-1 font-[family-name:var(--font-titular)] text-4xl font-extrabold text-crema no-underline">
                    {item.rotulo}
                  </a>
                </motion.li>
              ))}
            </ul>
            <p className="versalitas mt-8 text-xs text-brote">Aprende</p>
            <ul className="mt-2 flex flex-col gap-1">
              {aprende.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block py-1 text-xl font-bold text-crema no-underline">
                    {item.rotulo}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-end justify-between gap-4 pt-10">
              <Link href="/contacto" className="rounded-full border-2 border-crema bg-beca px-6 py-3 text-lg font-bold text-bosque no-underline">
                Hablemos
              </Link>
              <MigoImagen pose="saludando" ancho={120} />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
