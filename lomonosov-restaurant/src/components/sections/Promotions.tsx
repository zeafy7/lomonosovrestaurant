import React from "react";
import { motion } from "framer-motion";

const dailyPromos = [
  { day: "Понедельник", desc: "Любая акция на выбор" },
  { day: "Вторник", desc: "При заказе горячего блюда и салата: скидка -15%" },
  { day: "Среда", desc: "Сладкий день: скидка -15% на десерты" },
  { day: "Четверг", desc: "Рыбный день: скидка -15% на все блюда из рыбы" },
  { day: "Пятница–Суббота", desc: "Скидка -15% на кухню для компаний от 4-х гостей" },
  { day: "Воскресенье", desc: "Семейное воскресенье: скидка -20% (приходи с семьей от 3-х человек)" },
];

export default function Promotions() {
  return (
    <section id="promotions" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-4">Акции</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Daily Deals */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background border border-border p-6 md:p-8 rounded-lg shadow-sm"
          >
            <h3 className="font-serif text-xl md:text-2xl font-bold mb-6 md:mb-8 text-primary">Ежедневные акции</h3>
            <ul className="space-y-4 md:space-y-6">
              {dailyPromos.map((promo, idx) => (
                <li key={idx} className="flex flex-col gap-1 border-b border-border/50 pb-3 last:border-0 last:pb-0">
                  <span className="font-bold text-foreground uppercase tracking-wider text-xs md:text-sm">{promo.day}</span>
                  <span className="text-muted-foreground text-sm md:text-base">{promo.desc}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Birthday Promo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-primary-foreground p-8 rounded-lg shadow-sm flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="font-serif text-3xl font-bold mb-6 text-secondary">День Рождения</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-serif font-bold text-white">20%</div>
                  <div className="text-lg uppercase tracking-wider">Юбилярам</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-serif font-bold text-white">15%</div>
                  <div className="text-lg uppercase tracking-wider">Именинникам</div>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-4 font-medium">
                Действует 3 дня до и после праздника
              </p>
              <p className="text-sm text-primary-foreground/60 italic border-t border-primary-foreground/20 pt-4">
                * Скидки действуют на блюда из основного меню. Необходимо предъявить паспорт.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
