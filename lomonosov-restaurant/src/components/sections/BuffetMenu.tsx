import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import menuImg from "@assets/wzEOqoneo1ZN8b59Rz95BndPc987PYCurBX5xF-cwM2m4ucjZlLHsB5N9a1L1g_1776634998035.jpg";
import photo1 from "@assets/y72fTZpa0BhCfZyYQHvzrfkQ5MbtweewzTgz5mUdgkhD1GP0RKmj_wDbZDIu3f_1776634998035.jpg";
import photo2 from "@assets/VlOo_EWvrJ8P6NQPLQuV2O9WIxc8tkYaG_9KUISrpCZq-x48UmratAkVZ18Olx_1776634998035.jpg";
import photo3 from "@assets/hB0ZPcPwKc9jO3J6YKUbd6PJhUjleKW4h7ke4Jc_PXQRxI0Ee07066ZK2uZG-9_1776634998034.jpg";
import photo4 from "@assets/EfCNUvEMoc9dYvjuCOiISRrRw1T_D7k1XCVUEQem_OaVE76V1_OVuzx7MfG67e_1776634998033.jpg";
import photo5 from "@assets/6xvKmGg3YVjayK7y9UI-bOGQvlWyNMYg3plvq0dSogSISCnVBPwid4UJPvrQwH_1776634998033.jpg";
import photo6 from "@assets/uHwCRy7tjHrq5W7xRkUCbpWnGUzoJNRu25_a_0vysWlaIWPaQE1t77WurMSVDD_1776634998034.jpg";
import photo7 from "@assets/Rn3llEc-mL75f7uVYVGEjHqhrnrRBu7H2Aqi2uB1OMtIeFadjC7lyCNVTj5klm_1776634998034.jpg";
import photo8 from "@assets/Q_8Jjn_z7dI2eSEAVvohnHevNPtcerGzsQJ6axKPLZ4ve9IYmciZpiwRxTChGc_1776634998034.jpg";
import photo9 from "@assets/fTQoLRfuwOI7C9vUMqYNrSNrnCu41Q4EwdQuIMsDtrOCx-TPN6t8qf0jnc4PID_1776634998033.jpg";
import photo10 from "@assets/1m2bGQJ9o-bADC0ZpQQOOWRWq_bRJIIL0HwuLzbP_TOY_UCTNFBQ5GbRbX8H8F_1776634998033.jpg";

const foodPhotos = [
  { src: photo1, alt: "Брускетты с семгой и ветчиной" },
  { src: photo2, alt: "Канапе на шпажках" },
  { src: photo3, alt: "Рулетики ассорти" },
  { src: photo4, alt: "Рулетики и закуски" },
  { src: photo5, alt: "Рафаэлки ассорти" },
  { src: photo6, alt: "Салаты в стаканчиках" },
  { src: photo7, alt: "Брускетты с вялеными томатами" },
  { src: photo8, alt: "Бокс под водочку" },
  { src: photo9, alt: "Язык с хреном" },
  { src: photo10, alt: "Пивной бокс" },
];

export default function BuffetMenu() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="buffet" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-4">
            Фуршетное меню
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Элегантные угощения для корпоративов, банкетов и особых событий
          </p>
        </motion.div>

        {/* Menu image — first and prominent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 cursor-zoom-in"
          onClick={() => setLightbox(menuImg)}
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
            <img
              src={menuImg}
              alt="Фуршетное меню"
              className="w-full object-contain bg-white"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-3">
            Нажмите, чтобы увеличить
          </p>
        </motion.div>

        {/* Photo gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="font-serif text-2xl md:text-3xl text-foreground font-semibold">
            Примеры подачи
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {foodPhotos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-xl group cursor-pointer aspect-square"
              onClick={() => setLightbox(photo.src)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-xs font-medium">{photo.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="text-muted-foreground mb-6 text-lg">
            Для заказа фуршета свяжитесь с нами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+79027044470"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary text-primary font-medium tracking-wide uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300 rounded-sm"
            >
              +7 (902) 704-44-70
            </a>
            <a
              href="https://vk.com/im?media=&sel=-203648223"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium tracking-wide uppercase hover:opacity-90 transition-opacity duration-300 rounded-sm"
            >
              Написать в ВКонтакте
            </a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 hover:text-white/70 transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightbox}
              alt="Увеличенное фото"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
