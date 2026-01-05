import React from 'react';
import PageNovedades from '@/components/home/PageNovedades/PageNovedades';
import { novedades } from '@/utils/novedades.mock'

const Page = () => {
      return (
            <div>
                  <PageNovedades novedades={novedades} />
            </div>
      );
}

export default Page;
