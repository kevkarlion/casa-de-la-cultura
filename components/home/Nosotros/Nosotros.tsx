"use client";

import { motion, Variants } from "framer-motion";
import { MessageCircle, MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 48,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fade: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const diarios = [
  "/img-archivo/img1.webp",
  "/img-archivo/img2.webp",
  "/img-archivo/img3.webp",
  "/img-archivo/img4.webp",
  "/img-archivo/img5.webp",
  "/img-archivo/img6.webp",
  "/img-archivo/img7.webp",
  "/img-archivo/img8.webp",
  "/img-archivo/img9.webp",
  "/img-archivo/img10.webp",
  "/img-archivo/img11.webp",
];

export default function NosotrosPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <motion.div
          className="container mx-auto px-0 md:px-6 py-12 max-w-6xl"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* IZQUIERDA – CONTENIDO */}
            <div className="md:col-span-8 bg-white px-6 md:px-10 pb-16">
              <motion.p
                variants={fadeUp}
                className="uppercase tracking-widest text-sm text-neutral-500 mb-4"
              >
                CDC - Casa de la Cultura
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl font-neue font-bold leading-tight mb-8 text-black"
              >
                Más de cinco décadas
                <br />
                construyendo cultura
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="max-w-3xl font-inter text-lg text-neutral-700 leading-relaxed"
              >
                Somos una Asociación Civil sin fines de lucro fundada el 7 de
                mayo de 1972 en General Roca / Fiske Menuco, Río Negro, con el
                objetivo de difundir las industrias culturales y promover la
                producción artística local y regional.
              </motion.p>
            </div>

            {/* DERECHA – CONTACTO (NEGRO) */}
            <motion.aside
              variants={fadeUp}
              className="
          md:col-span-4
          bg-black
          text-white
          px-6 md:px-8
          py-16
          flex flex-col
          justify-between
        "
            >
              <div className="space-y-8">
                {/* CONTACTO */}
                <div>
                  <p className="uppercase tracking-widest text-xs text-neutral-400 mb-4">
                    Contacto
                  </p>

                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        href="https://maps.google.com/?q=9+de+Julio+1043+General+Roca"
                        target="_blank"
                        rel="noopener noreferrer"
                        
                        className="flex items-center gap-3 hover:text-neutral-300 transition"
                      >
                        <MapPin size={16} />9 de Julio 1043
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://wa.me/54954298590848"
                        className="flex items-center gap-3 hover:text-neutral-300 transition"
                        target="_blank"
                      >
                        <Phone size={16} />
                        (0298) 59-0848
                      </a>
                    </li>

                    <li>
                      <a
                        href="mailto:casadelacultura@gmail.com"
                        className="flex items-center gap-3 hover:text-neutral-300 transition"
                        target="_blank"
                      >
                        <Mail size={16} />
                        casadelaculturagr@gmail.com 
                      </a>
                    </li>
                  </ul>
                </div>

                {/* WHATSAPP CTA */}
                <div>
                  <p className="uppercase tracking-widest text-xs text-neutral-400 mb-3">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/54298590848"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                inline-flex items-center gap-3
                px-5 py-3
                border border-white
                hover:bg-white hover:text-black
                transition
                text-sm font-medium
              "
                  >
                    <MessageCircle size={18} />
                    Escribinos por WhatsApp
                  </a>
                </div>

                {/* REDES */}
                <div>
                  <p className="uppercase tracking-widest text-xs text-neutral-400 mb-3">
                    Redes
                  </p>

                  <div className="flex gap-3 flex-wrap">
                    <a
                      href="https://www.instagram.com/cdcroca/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-white/40 hover:border-white transition text-sm"
                    >
                      Instagram
                    </a>

                    <a
                      href="https://www.facebook.com/CDCroca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-white/40 hover:border-white transition text-sm"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-xs text-neutral-500">© CDC</div>
            </motion.aside>
          </div>
        </motion.div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="container mx-auto px-6 pt-12 pb-20 max-w-6xl">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-bold mb-6">Quiénes somos</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Casa de la Cultura (CDC) es un espacio de formación artística y un
              proyecto autogestionado, abierto a la expresión, el trabajo y la
              experimentación de artistas independientes.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Desde sus inicios promovemos la participación activa de quienes
              desean habitar y construir este espacio, manteniendo un vínculo
              permanente con la comunidad.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              A lo largo de más de cinco décadas de trayectoria, CDC se
              consolidó como el centro cultural más antiguo de la ciudad y uno
              de los espacios culturales de mayor reconocimiento en la región.
            </p>
          </motion.div>

          <motion.div variants={fade} className="bg-neutral-50 p-8">
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="visible"
            >
              {[
                ["1972", "Año de fundación"],
                ["+40", "Talleres artísticos activos"],
                ["2", "Salas teatrales"],
                ["50+", "Años de trayectoria"],
              ].map(([value, label]) => (
                <motion.li
                  key={label}
                  variants={fadeUp}
                  className="mb-6 last:mb-0"
                >
                  <p className="text-3xl font-light">{value}</p>
                  <p className="text-sm text-neutral-600">{label}</p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </section>

      {/* GALERÍA ARCHIVOS DE DIARIO */}
      <section className="bg-neutral-100">
        <motion.div
          className="container mx-auto px-6 py-20 max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-4">
            CDC en los medios
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-3xl text-neutral-700 text-sm mb-12"
          >
            Recortes de archivos periodísticos que reflejan la trayectoria, el
            impacto cultural y la presencia histórica de Casa de la Cultura.
          </motion.p>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {diarios.map((src, i) => (
              <motion.button
                key={i}
                variants={fade}
                onClick={() => setActiveImage(src)}
                className="
                  relative
                  h-90
                  md:h-105
                  overflow-hidden
                  bg-neutral-200
                  text-left
                "
              >
                <Image
                  src={src}
                  alt="Archivo periodístico Casa de la Cultura"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* QUÉ HACEMOS */}
      <section className="bg-neutral-100">
        <motion.div
          className="container mx-auto px-6 py-20 max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-10">
            Qué hacemos
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Formación artística",
                text: "Más de cuarenta talleres anuales con frecuencia semanal en disciplinas como danza, música, canto, teatro y oficios culturales.",
              },
              {
                title: "Producción cultural",
                text: "Obras teatrales, conciertos, muestras de arte, fotografía y escultura, encuentros culturales y proyectos interdisciplinarios.",
              },
              {
                title: "Gestión y comunidad",
                text: "Gestión de servicios culturales y propuestas formativas destinadas a públicos de todas las edades.",
              },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <h3 className="font-medium mb-3">{item.title}</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ESPACIOS */}
      <section className="container mx-auto px-6 py-20 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-10">
            Nuestros espacios
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeUp}>
              <h3 className="font-medium mb-2">Sala teatral principal</h3>
              <p className="text-neutral-700 text-sm">
                Sala a la italiana con capacidad para 177 butacas, destinada a
                funciones teatrales y musicales.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="font-medium mb-2">Sala II</h3>
              <p className="text-neutral-700 text-sm">
                Sala con gradas y capacidad para 36 personas, utilizada para
                cineclub y propuestas experimentales.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ALCANCE */}
      <section className="bg-neutral-100">
        <motion.div
          className="container mx-auto px-6 py-20 max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-bold mb-6">Alcance y proyección</h2>
          <p className="max-w-4xl text-neutral-700 leading-relaxed">
            Casa de la Cultura convoca y organiza propuestas de alcance
            regional, nacional e internacional, como festivales, encuentros y
            ciclos culturales.
          </p>
        </motion.div>
      </section>

      {/* ORGANIZACIÓN */}
      <section className="container mx-auto px-6 py-20 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-10">
            Organización institucional
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-4xl text-neutral-700 leading-relaxed mb-10"
          >
            Casa de la Cultura se organiza como una Asociación Civil sin fines
            de lucro, con una estructura horizontal de tipo “pirámide chata”.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-10 text-sm text-neutral-700">
            <motion.ul variants={fadeUp} className="space-y-2">
              <li>• Comisión Directiva</li>
              <li>• Comité Supervisor</li>
              <li>• Comisión Revisora de Cuentas</li>
              <li>• Dirección Ejecutiva</li>
              <li>• Dirección de Administración y Finanzas</li>
              <li>• Dirección de Formación</li>
            </motion.ul>

            <motion.ul variants={fadeUp} className="space-y-2">
              <li>• Dirección de Programación</li>
              <li>• Comunicación y Prensa</li>
              <li>• Comunicación Institucional</li>
              <li>• Área Territorio y Comunidad</li>
              <li>• Atención a Socios y Boletería</li>
              <li>• Área Técnica y Voluntariado</li>
            </motion.ul>
          </div>
          {/* CÓMO NOS ORGANIZAMOS */}
<motion.div
  variants={fadeUp}
  className="mt-16 max-w-5xl text-sm text-black"
>
  <h3 className="text-xl font-bold mb-6 uppercase">
    Cómo nos organizamos
  </h3>

  <p className="mb-6 font-medium">
    Comisión Directiva 2026–2027
  </p>

  <ul className="space-y-3 mb-8">
    <li><strong>Coordinador:</strong> Sergio Mondaca</li>
    <li><strong>Coordinador Adjunto:</strong> Cristian Acuña</li>
    <li>
      <strong>Comité Supervisor:</strong> Amira Pinolli · Elena Ledesma ·
      Carla Romero · Antonella Perugini · Alejandro Fucci · Daniela Gomez
    </li>
    <li>
      <strong>Revisores de Cuentas:</strong> Mariela Mansilla · Gonzalo Lopez Gadano
    </li>
  </ul>

  <div className="grid md:grid-cols-2 gap-6">
    <ul className="space-y-2">
      <li>
        <strong>Administración y finanzas:</strong><br />
        Mariela Mansilla, Natalia Arratia, Antonella Perugini,
        Cristian Acuña, Sergio Mondaca
      </li>

      <li>
        <strong>Desarrollo artístico, cultural y prácticas del buen vivir:</strong><br />
        Antonella Perugini, Belén Fabi, Elena Ledesma
      </li>

      <li>
        <strong>Programación:</strong><br />
        Daniela Gomez, Sergio Mondaca, Cristian Acuña
      </li>

      <li>
        <strong>Técnica y mantenimiento:</strong><br />
        José Ducca, Juan Garizzo, Mariano Herrera
      </li>
    </ul>

    <ul className="space-y-2">
      <li>
        <strong>Comunicación y prensa:</strong><br />
        Carla Romero, Daniela Henriquez, Abril Medina,
        Fernando Purafil, Lucila Gazagne
      </li>

      <li>
        <strong>Territorio y Comunidad:</strong><br />
        Micaela Ruiz, Daniela Gomez, Leticia Tarifa
      </li>

      <li>
        <strong>Jefatura de Sala:</strong><br />
        Marcelo Merlo
      </li>

      <li>
        <strong>Secretaría Audiovisual:</strong><br />
        Gonzalo Lopez Gadano
      </li>

      <li>
        <strong>Maestranza:</strong><br />
        Vanesa Ubeda, Gabriela Poblet, Ale
      </li>

      <li>
        <strong>Programa de socixs y beneficios:</strong><br />
        Amira Pinolli
      </li>
    </ul>
  </div>
</motion.div>

        </motion.div>
      </section>

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-6"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={activeImage}
              alt="Archivo periodístico ampliado"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}
