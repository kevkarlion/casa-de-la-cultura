import React from 'react';
import PageNovedades from '@/components/home/PageNovedades/PageNovedades';
import { novedades } from '@/utils/novedades.mock'

// Quitar esas 3 noticias viejas
const novedadesFiltradas = novedades.filter(n => 
  n.title !== "Cineclub de Verano · 7° Ciclo TYÖ" && 
  n.title !== "Feria Agro Cultural 2026" &&
  n.title !== "Convocatoria · Espacio Gastronómico Cultural en CDC"
)

const Page = () => {
      return (
            <div>
                  <PageNovedades novedades={novedadesFiltradas} />
            </div>
      );
}

export default Page;
