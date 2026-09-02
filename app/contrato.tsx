/**
 * Contrato de dirección. Se emite como comentario HTML real dentro de <body>
 * para que sobreviva al build de producción y cualquiera pueda auditar contra
 * qué se construyó esta página.
 */
const CONTRATO = `<!--
THESIS: un cartel de convocatoria pegado en la pared del pabellón, no un
portafolio. Refusa la grilla de tarjetas iguales del landing de creador.
OWN-WORLD: tintas planas serigrafiadas -- naranja #FF4A1C, verde #6FCF3F,
azul #1B39E8 -- sobre papel bond #F0E7D3; Big Shoulders condensada a sangre;
sobreimpresion multiply, trama de semitono, registro desfasado. Sin degradados,
sin vidrio, sin sombras suaves.
STORY: alguien de 19 llega desde TikTok, entiende en tres segundos que hay mas
de 500 becas gratis esperandolo, entra a la plataforma, y descubre que detras
hay una persona que salio de Lima Este con Beca 18.
FIRST VIEWPORT: titular a sangre en tres lineas ocupando la pantalla; franja de
tinta naranja con la accion primaria; tira de cifras verificadas al pie.
FORM: cartel de convocatoria publica peruana; candidato 3 de 7; semilla 8d5b5bbd.
FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, DESIGN.md, and every shipping raster carrying its
provenance.
-->`;

export function ContratoDeDireccion() {
  return <div hidden aria-hidden="true" dangerouslySetInnerHTML={{ __html: CONTRATO }} />;
}
