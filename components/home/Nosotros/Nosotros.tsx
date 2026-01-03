'use client'

import { motion, Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 48,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1], // easeOutExpo-ish
    },
  },
}

export const fade: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
}


export default function NosotrosPage() {
  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="relative overflow-hidden bg-neutral-100">
        <motion.div
          className="container mx-auto px-6 py-24 max-w-6xl"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-widest text-sm text-neutral-500 mb-4"
          >
            CDC - Casa de la Cultura
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-neue font-bold leading-tight mb-8"
          >
            Más de cinco décadas
            <br />
            construyendo cultura
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-3xl font-inter text-lg text-neutral-700 leading-relaxed"
          >
            Somos una Asociación Civil sin fines de lucro fundada el 7 de mayo de 1972
            en General Roca / Fiske Menuco, Río Negro, con el objetivo de difundir las
            industrias culturales y promover la producción artística local y regional.
          </motion.p>
        </motion.div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="container mx-auto px-6 py-20 max-w-6xl">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
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
              Desde sus inicios promovemos la participación activa de quienes desean
              habitar y construir este espacio, manteniendo un vínculo permanente
              con la comunidad.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              A lo largo de más de cinco décadas de trayectoria, CDC se consolidó
              como el centro cultural más antiguo de la ciudad y uno de los espacios
              culturales de mayor reconocimiento en la región.
            </p>
          </motion.div>

          <motion.div
            variants={fade}
            className="bg-neutral-50 p-8"
          >
            <motion.ul variants={stagger} initial="hidden" whileInView="visible">
              {[
                ['1972', 'Año de fundación'],
                ['+40', 'Talleres artísticos activos'],
                ['2', 'Salas teatrales'],
                ['50+', 'Años de trayectoria'],
              ].map(([value, label]) => (
                <motion.li key={label} variants={fadeUp} className="mb-6 last:mb-0">
                  <p className="text-3xl font-light">{value}</p>
                  <p className="text-sm text-neutral-600">{label}</p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </section>

      {/* QUÉ HACEMOS */}
      <section className="bg-neutral-100">
        <motion.div
          className="container mx-auto px-6 py-20 max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-10">
            Qué hacemos
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Formación artística',
                text:
                  'Más de cuarenta talleres anuales con frecuencia semanal en disciplinas como danza, música, canto, teatro y oficios culturales.',
              },
              {
                title: 'Producción cultural',
                text:
                  'Obras teatrales, conciertos, muestras de arte, fotografía y escultura, encuentros culturales y proyectos interdisciplinarios.',
              },
              {
                title: 'Gestión y comunidad',
                text:
                  'Gestión de servicios culturales y propuestas formativas destinadas a públicos de todas las edades.',
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
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-10">
            Nuestros espacios
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeUp}>
              <h3 className="font-medium mb-2">Sala teatral principal</h3>
              <p className="text-neutral-700 text-sm">
                Sala a la italiana con capacidad para 177 butacas, destinada a funciones
                teatrales y musicales.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="font-medium mb-2">Sala II</h3>
              <p className="text-neutral-700 text-sm">
                Sala con gradas y capacidad para 36 personas, utilizada para cineclub
                y propuestas experimentales.
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
            Casa de la Cultura convoca y organiza propuestas de alcance regional,
            nacional e internacional, como festivales, encuentros y ciclos culturales.
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
            Casa de la Cultura se organiza como una Asociación Civil sin fines de lucro,
            con una estructura horizontal de tipo “pirámide chata”.
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
        </motion.div>
      </section>
    </main>
  )
}
