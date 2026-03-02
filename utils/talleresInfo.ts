export interface TallerInfo {
      title: string;
      teacher?: string;
      age?: string;
      schedule?: string;
      phone?: string;
      description: string;
      images?: string[];
    }
    
    export const talleresInfo: TallerInfo[] = [
      {
        title: "Dibujo y pintura",
        teacher: "Stefani Barrera",
        age: "5 a 12 años",
        description:
          "Un espacio destinado a infancias donde la creatividad se convierte en juego y el arte en conversación. A través del dibujo y la pintura exploramos colores, formas y texturas, dejando que la imaginación nos guíe. Ideal para divertirse, explorar y compartir.",
        images: ["/imagenes/talleres/dibujo-y-pintura-infancias.webp"],
      },
    
      {
        title: "Coreo y Cardio",
        teacher: "Jessica Quesada",
        age: "+16 años",
        schedule: "Miércoles y viernes de 19:30 a 20:30 hs",
        description:
          "¿Querés mejorar tu calidad de vida, potenciar el sistema inmunológico, aumentar tu autoestima, fortalecer tus músculos mientras te divertís? ¡Te invitamos a conocer Coreo y Cardio!",
        images: ["/imagenes/talleres/coreo-y-cardio-adultxs.webp"],
      },
    
      {
        title: "Baile Fitness",
        teacher: "Beba Díaz",
        age: "+16 años",
        schedule: "Miércoles y viernes de 20:30 a 21:30 hs",
        description:
          "Es una forma divertida y efectiva de mantenerse en forma y mejorar la condición física.",
        images: ["/imagenes/talleres/baile-fitness-adolescencias-y-adultxs.webp"],
      },
    
      {
        title: "Ritmos Latinos",
        teacher: "Beba Díaz",
        schedule: "Jueves de 19:30 a 21:00 hs",
        description:
          "Taller orientado al desarrollo artístico, corporal y emocional. Un espacio para conectar con el cuerpo y el estilo propio, fortaleciendo la confianza y la expresión desde la autenticidad.",
        images: ["/imagenes/talleres/ritmos-latinos-adolescencias-y-adultxs.webp"],
      },
    
      {
        title: "Tango",
        teacher: "Martín Mezquita · Instagram: @martinmezquita_92",
        age: "18 años en adelante",
        schedule: "Jueves de 19:30 a 21:00 hs",
        description:
          "Taller de tango con enfoque corporal y musical. Se trabajarán postura, caminata, interpretación musical y coordinación en pareja. Grupos reducidos y personalizados según franjas etarias.",
        images: ["/imagenes/talleres/tango-adultos.webp"],
      },
    
      {
        title: "Ukeleando con Tin",
        teacher: "Martín Mezquita",
        age: "8 a 16 años",
        schedule: "Viernes de 19:00 a 20:00 hs",
        description:
          "Taller de ukelele para principiantes con enfoque instrumental y musical. Se trabajarán acordes, rasgueos y canciones grupales.",
        images: ["/imagenes/talleres/ukulele-infancias-y-adolescencias.webp"],
      },
    
      {
        title: "Teatro",
        teacher: "Micaela Ruiz",
        description:
          "Un espacio creativo para explorar el juego teatral, expresión corporal e imaginación. Actividades lúdicas, improvisaciones y construcción de escenas para todas las edades.",
        images: [
          "/imagenes/talleres/teatro-adolescencias.webp",
          "/imagenes/talleres/teatro-adultxs.webp",
          "/imagenes/talleres/teatro-infancias.webp",
        ],
      },
    
      {
        title: "Taekwon-do",
        teacher: "Oriana Gil",
        age: "4 a 12 años",
        schedule: "Miércoles y viernes de 20 a 21 hs",
        description:
          "Arte marcial que combina actividad física y desarrollo cognitivo, enseñado a través de juegos lúdicos y valores aplicados a la vida cotidiana.",
        images: ["/imagenes/talleres/taekwondo-infancias.webp"],
      },
    
      {
        title: "Taekwon-do",
        teacher: "Darío Jerez",
        age: "+13 años",
        description:
          "Taller dedicado a la enseñanza y difusión del taekwon-do ITF, técnicas, valores y seguimiento de graduación reconocida a nivel provincial, nacional e internacional.",
        images: ["/imagenes/talleres/taekwondo-adolescencias-y-adultxs.webp"],
      },
    
      {
        title: "Arquitectura para Infancias",
        teacher: "Belen Stefanich",
        age: "6 a 12 años",
        schedule: "Sábados de 10 a 11:30 hs",
        description:
          "Taller de arquitectura de verano con desafíos de construcción y maquetas, aprendiendo estructuras y contenidos de arquitectura mientras se divierten.",
        images: ["/imagenes/talleres/arquitectura-infancias.webp"],
      },
    
      {
        title: "Habitar Poesía",
        schedule: "Miércoles de 19.30 a 21 hs",
        description:
          "Habitar Poesía es un taller grupal que propone transitar la escritura como práctica sostenida, en diálogo con otrxs. Un espacio para indagar en el propio lenguaje, explorar la palabra en su dimensión más profunda y encontrar la propia voz.\n\nA través de consignas, lecturas y trabajo compartido, se acompañan los procesos individuales con una mirada respetuosa, identificando fortalezas y posibles líneas de reescritura. Escribir como escucha, como búsqueda y como experiencia colectiva.",
        phone: "2984653721",
        images: ["/imagenes/talleres/habitar-poesia.webp"],
      },
    ];