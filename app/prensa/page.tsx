import { CampoDeTinta } from "@/components/cartel/CampoDeTinta";
import { Rotulo } from "@/components/cartel/Rotulo";
import { ListaPrensa } from "@/components/contenido/ListaPrensa";
import { perfil } from "@/content/perfil";
import { prensa } from "@/content/prensa";
import { metadatos } from "@/lib/seo";

export const metadata = metadatos({
  titulo: "Prensa",
  descripcion:
    "Cobertura de Becas para Migajear en La República, Infobae, El Peruano, Telemundo y otros medios.",
  ruta: "/prensa",
});

export default function Prensa() {
  return (
    <>
      <CampoDeTinta tinta="ciruela" className="pt-10 sm:pt-14">
        <div className="flex flex-col gap-8">
          <h1 className="cartel text-titular max-w-[12ch]">Lo que escribieron otros</h1>
          <p className="prosa text-lg leading-snug font-medium sm:text-2xl">
            Todo lo que este sitio afirma sobre mí está en alguno de estos enlaces. Si necesitas
            material para una nota, escríbeme a{" "}
            <a href={`mailto:${perfil.correo}`} className="underline decoration-durazno decoration-[3px] underline-offset-4">
              {perfil.correo}
            </a>
            .
          </p>
        </div>
      </CampoDeTinta>

      <CampoDeTinta>
        <ListaPrensa coberturas={prensa} />
      </CampoDeTinta>
    </>
  );
}
