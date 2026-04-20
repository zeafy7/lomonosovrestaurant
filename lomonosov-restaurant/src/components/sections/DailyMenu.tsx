import React from "react";
import { motion } from "framer-motion";
import promoImg from "@assets/weekend_menu_promo.jpg";

export default function DailyMenu() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-secondary font-sans uppercase tracking-[0.3em] text-xs md:text-sm mb-3">
            Специальное предложение
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            Дневное меню
          </h2>
          <div className="w-16 h-[1px] bg-secondary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto items-center">
          {/* Photo — on mobile ограничиваем высоту */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl max-h-[340px] md:max-h-none"
          >
            <img
              src={promoImg}
              alt="Меню выходного дня"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            <div>
              <h3 className="font-serif text-2xl md:text-4xl font-bold text-white mb-2">
                Меню выходного дня
              </h3>
              <div className="inline-block bg-secondary text-secondary-foreground font-bold text-xl md:text-2xl px-4 py-2 rounded-lg mt-1">
                от 290 р.
              </div>
            </div>

            <div className="space-y-3 text-primary-foreground/90 text-base md:text-lg">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                <span className="font-bold text-white">Суббота – Воскресенье</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                <span>
                  С <span className="font-bold text-white">12:00</span> до{" "}
                  <span className="font-bold text-white">15:00</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                <span className="font-serif italic">Теперь и в выходные дни!</span>
              </div>
            </div>

            <div className="border-t border-primary-foreground/20 pt-5 space-y-3">
              <p className="text-xs uppercase tracking-widest text-primary-foreground/60">
                Доставка и бронирование
              </p>
              {/* На мобильном — большая кнопка-звонок */}
              <a
                href="tel:+79027044470"
                className="flex items-center justify-center gap-3 w-full bg-secondary text-secondary-foreground font-bold text-lg py-4 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-200 md:w-auto md:inline-flex md:px-6 md:bg-transparent md:text-white md:justify-start md:text-xl md:py-0 md:rounded-none md:hover:text-secondary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +7 (902) 704-44-70
              </a>
              <p className="text-xs text-primary-foreground/50 text-center md:text-left">
                Коряжма, Проспект им. М.В. Ломоносова д. 5
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
