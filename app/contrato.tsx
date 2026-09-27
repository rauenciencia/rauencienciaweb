/**
 * Contrato de dirección. Se emite como comentario HTML real dentro de <body>
 * para que sobreviva al build de producción y cualquiera pueda auditar contra
 * qué se construyó esta página.
 */
const CONTRATO = `<!--
THESIS: el cuaderno de aventuras de un estudiante que junta migas hasta llegar
lejos. Casa digital de Raul, no landing de creador: la foto real manda, MIGO
acompana.
OWN-WORLD: Cuaderno migajero (brief 9). Crema #FCF5E5, bosque #0F3D2E, beca
#F5C443, brote #9CCB4F, durazno #FACC9C, tinta #1F2A10. Stickers con contorno
de 2 px y sombra solida, pildoras rotadas -2, garabatos que se dibujan, trama
de migas. Bricolage Grotesque, Big Shoulders, DM Sans, Caveat.
STORY: llegas desde TikTok, entiendes en segundos que hay becas gratis, haces
match, y descubres que detras hay alguien de Nana que gano +15 becas.
FIRST VIEWPORT: "Ya no migajeamos amor." y "Migajeamos becas." en pildora
amarilla, foto de Raul y MIGO saludando, CTA primario "Hacer match con mi beca".
FORM: brief pinned (BRIEF-WEB-RAUENCIENCIA.md); reemplaza la semilla 8d5b5bbd.
FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, DESIGN.md, and every shipping raster carrying its
provenance.
-->`;

export function ContratoDeDireccion() {
  return <div hidden aria-hidden="true" dangerouslySetInnerHTML={{ __html: CONTRATO }} />;
}
