/**
 * Tipos compartidos por toda la capa de contenido.
 *
 * Regla del proyecto: ningún componente inventa texto. Todo lo que se lee en
 * pantalla sale de `content/`. Si algo está mal escrito en el sitio, se
 * corrige aquí y no en el JSX.
 */

/** Marca un dato que todavía no está confirmado y no debe publicarse como cierto. */
export type PorConfirmar<T> = { valor: T; porConfirmar: true };

export type Ficha = {
  /** Cómo aparece impreso, en versalitas del cartel. */
  etiqueta: string;
  valor: string;
};

export type Red = {
  nombre: string;
  /** Cómo se imprime en el cartel: siempre en mayúsculas, sin ícono. */
  rotulo: string;
  url: string;
  /** true cuando la URL todavía es una suposición y hay que verificarla. */
  porConfirmar?: boolean;
};

export type Cifra = {
  /** El número tal cual se imprime. Se guarda como texto para no perder el "+". */
  numero: string;
  /** Qué cuenta ese número. Una línea, en minúsculas. */
  concepto: string;
  /** De dónde sale el dato. Obligatorio: sin fuente, la cifra no se publica. */
  fuente: string;
};

export type Hito = {
  anio: string;
  titulo: string;
  detalle: string;
  /** Tinta con la que se imprime este hito en la línea de tiempo. */
  tinta?: Tinta;
};

export type Tinta = "naranja" | "verde" | "azul" | "tinta";

export type Proyecto = {
  slug: string;
  nombre: string;
  /** El apodo con el que la gente lo conoce, si tiene uno. */
  apodo?: string;
  /** Una línea. Es lo que se lee en la portada. */
  resumen: string;
  /** Párrafos para la página del proyecto. */
  descripcion: string[];
  /** Qué hace la persona que entra, paso a paso. */
  comoFunciona: string[];
  estado: "activo" | "archivado" | "en construcción";
  anio: string;
  tinta: Tinta;
  cifras: Cifra[];
  enlace?: { rotulo: string; url: string };
  repositorio?: string;
  /** true = es el proyecto que manda la portada. Solo uno debería serlo. */
  insignia?: boolean;
};

export type Cobertura = {
  medio: string;
  titular: string;
  url: string;
  fecha: string;
};

/** Una charla empaquetada, con nombre propio: lo que alguien puede contratar. */
export type Tema = {
  slug: string;
  titulo: string;
  /** Una línea. Es lo que decide si siguen leyendo. */
  promesa: string;
  descripcion: string;
  /** Qué se lleva el público. Lo concreto, no los adjetivos. */
  seLlevan: string[];
  /** A qué tipo de organización le sirve. */
  para: string;
  tinta: Tinta;
};

/** Una charla ya dada. Solo entra lo que ocurrió de verdad. */
export type Aparicion = {
  titulo: string;
  lugar: string;
  fecha: string;
  url?: string;
};

/**
 * Un testimonio real, con nombre y cargo de quien lo dijo.
 * Sin nombre verificable, no se publica.
 */
export type Testimonio = {
  cita: string;
  quien: string;
  cargo: string;
  organizacion: string;
};
