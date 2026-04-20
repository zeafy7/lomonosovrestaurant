import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function Booking() {
  return (
    <section id="booking" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-4">
            Бронирование стола
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Свяжитесь с нами удобным способом — мы подберём лучший столик для вашего визита
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
          {/* Phone */}
          <motion.a
            href="tel:+79027044470"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileTap={{ scale: 0.97 }}
            className="group flex flex-col items-center gap-4 md:gap-5 bg-background border border-border rounded-2xl p-6 md:p-10 shadow-md hover:shadow-xl hover:border-primary transition-all duration-300 cursor-pointer active:scale-95"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <Phone className="w-6 h-6 md:w-7 md:h-7 text-primary" />
            </div>
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">
                Позвонить
              </p>
              <p className="font-serif text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                +7 (902) 704-44-70
              </p>
              <p className="text-xs md:text-sm text-muted-foreground mt-2 md:mt-3 leading-relaxed">
                Пн–Чт 12:00–23:00<br className="sm:hidden" /><span className="hidden sm:inline"> · </span>Пт–Сб 12:00–01:00<br className="sm:hidden" /><span className="hidden sm:inline"> · </span>Вс 12:00–23:00
              </p>
            </div>
          </motion.a>

          {/* VK */}
          <motion.a
            href="https://vk.com/im?media=&sel=-203648223"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileTap={{ scale: 0.97 }}
            className="group flex flex-col items-center gap-4 md:gap-5 bg-background border border-border rounded-2xl p-6 md:p-10 shadow-md hover:shadow-xl hover:border-primary transition-all duration-300 cursor-pointer active:scale-95"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-primary" />
            </div>
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">
                Написать в ВКонтакте
              </p>
              <p className="font-serif text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                Lomonosov Restaurant
              </p>
              <p className="text-xs md:text-sm text-muted-foreground mt-2 md:mt-3">
                Ответим в личных сообщениях — быстро и удобно
              </p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
