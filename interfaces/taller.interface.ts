export interface Taller {
      id: number;
      title: string;
      description: string;
    
      image?: string;
      images?: {
        src: string;
        alt?: string;
      }[];
    
      teacher?: string;
      age?: string;
      schedule?: string;
    
      phone?: string;
    
      tags?: string[];
      featured?: boolean;
    }