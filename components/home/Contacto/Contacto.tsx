'use client'

import { motion, cubicBezier } from 'framer-motion'

export default function ContactoPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 48, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.9, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
  }

  return (
    <main className="bg-white text-black">
      {/* HERO CONTACTO */}
      <section className="relative overflow-hidden bg-neutral-100">
        <div className="container mx-auto px-6 py-24 max-w-6xl">
          <motion.p
            className="uppercase tracking-widest text-sm text-neutral-500 mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Casa de la Cultura
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl font-neue font-bold leading-tight mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Contacto
          </motion.h1>
          <motion.p
            className="max-w-3xl text-lg text-neutral-700 leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Estamos disponibles para consultas, colaboraciones y todo tipo de
            actividades culturales. Vení a conocernos o comunicate con nosotros
            a través de nuestras redes y vías oficiales.
          </motion.p>
        </div>
      </section>

      {/* INFORMACIÓN DE CONTACTO */}
      <section className="container mx-auto px-6 py-20 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">Dirección</h2>
              <p className="text-neutral-700">
                Calle Principal 123, General Roca / Fiske Menuco, Río Negro, Argentina
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Teléfono</h2>
              <p className="text-neutral-700">+54 298 1234567</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Correo electrónico</h2>
              <p className="text-neutral-700">info@cdcroca.org.ar</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Redes sociales</h2>
              <ul className="flex gap-4">
                <li>
                  <a
                    href="https://www.instagram.com/cdcroca/?hl=es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-700 hover:text-primary transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/CDCroca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-700 hover:text-primary transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5492981234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-700 hover:text-primary transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* MAPA */}
          <motion.div
            className="w-full h-80 md:h-full rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }}
            viewport={{ once: true }}
          >
            <iframe
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3099.4044682557324!2d-67.58192162527531!3d-39.02889650445608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33b7888cdbe1%3A0xd2149a9cf28b4415!2sCDC%20%7C%20Casa%20de%20la%20Cultura!5e0!3m2!1ses!2sar!4v1767318063379!5m2!1ses!2sar"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:info@cdcroca.org.ar"
            className="inline-block bg-primary text-white font-bold px-8 py-4 rounded-md shadow-lg hover:bg-primary/90 transition-all"
          >
            Enviar consulta
          </a>
        </motion.div>
      </section>
    </main>
  )
}
