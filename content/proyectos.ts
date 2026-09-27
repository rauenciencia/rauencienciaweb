import { urlPlataforma } from "@/lib/sitio";

import type { Proyecto } from "./tipos";

/**
 * Tus proyectos. El que tenga `insignia: true` es el que manda la portada.
 * Para agregar uno, copia un bloque completo y cambia el `slug`: la página
 * `/proyectos/<slug>` se genera sola.
 */
export const proyectos: Proyecto[] = [
  {
    slug: "becas-para-migajear",
    nombre: "Becas para Migajear",
    apodo: "el Tinder de becas",
    insignia: true,
    resumen:
      "Más de 500 becas, prácticas, voluntariados y concursos reales, en una pantalla donde deslizas hasta quedarte con los que sí te sirven.",
    descripcion: [
      "Las oportunidades de estudio existen y están publicadas. El problema es que están repartidas entre decenas de sitios oficiales, en convocatorias que se cierran sin aviso y en PDF que nadie termina de leer. La respuesta habitual es un Excel compartido: alguien lo arma, todos lo abren una vez y nadie vuelve.",
      "Becas para Migajear toma esa misma información pública —de gobiernos, universidades y organismos internacionales— y la entrega con la mecánica que esta generación ya usa sin pensar. Defines tu perfil de estudio, deslizas a la derecha lo que te sirve y a la izquierda lo que no, y terminas con tu lista corta.",
      "Funciona en el navegador, no hay app que descargar, y es gratuita.",
    ],
    comoFunciona: [
      "Dices qué estudias, a dónde quieres ir y qué tipo de oportunidad buscas.",
      "Deslizas por las convocatorias que encajan con ese perfil.",
      "Te quedas con tu lista corta y postulas directo en la fuente oficial.",
    ],
    estado: "activo",
    anio: "2026",
    tinta: "naranja",
    cifras: [
      { numero: "+500", concepto: "oportunidades reales publicadas", fuente: "rauenciencia.com" },
      { numero: "+15.000", concepto: "jóvenes la han usado", fuente: "Infobae, agosto 2026" },
      { numero: "+400.000", concepto: "personas alcanzadas en tres meses", fuente: "La República, agosto 2026" },
    ],
    enlace: { rotulo: "Entrar a la plataforma", url: urlPlataforma },
  },
  {
    slug: "simulador-prima",
    nombre: "Simulador de decisiones",
    resumen:
      "Encuesta de feria en tres rutas de cinco preguntas —decisiones financieras, empleabilidad y ciberseguridad— que te dice al instante si acertaste y por qué.",
    descripcion: [
      "Una persona escanea un código QR, responde en dos minutos y ve al instante si su respuesta fue la mejor opción y cuál era el razonamiento detrás. Quien organiza la feria ve las respuestas llegar en tiempo real desde el celular.",
      "Construido para stands y ferias, donde nadie va a instalar nada y el tiempo de atención se mide en segundos.",
    ],
    comoFunciona: [
      "Escaneas el QR del stand y eliges una de las tres rutas.",
      "Respondes cinco preguntas y ves la explicación después de cada una.",
      "Todo queda registrado para quien organiza la actividad.",
    ],
    estado: "activo",
    anio: "2026",
    tinta: "azul",
    cifras: [],
    repositorio: "https://github.com/rauenciencia/simulador",
  },
];

export const proyectoInsignia =
  proyectos.find((proyecto) => proyecto.insignia) ?? proyectos[0];

export function proyectoPorSlug(slug: string): Proyecto | undefined {
  return proyectos.find((proyecto) => proyecto.slug === slug);
}
