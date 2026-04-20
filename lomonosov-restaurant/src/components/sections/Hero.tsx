import React from "react";
import { motion } from "framer-motion";
import heroImg from "@assets/p8hQm33LknYPxaASgsZq7_CEColhZrhygOMZUQrUOh1v45bf_KsOERlGWhZiHj_1776633755778.jpg";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Lomonosov Restaurant Entrance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-secondary font-sans uppercase tracking-[0.3em] text-xs md:text-base mb-4 md:mb-6"
        >
          Ресторан
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-[13vw] sm:text-7xl md:text-8xl lg:text-9xl text-white font-bold uppercase tracking-wider mb-5 md:mb-8"
        >
          Lomonosov
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-300 font-serif text-base md:text-2xl italic max-w-2xl px-2"
        >
          Изысканная русская кухня в самом сердце Коряжмы. Место для ваших главных событий.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href="#booking"
            className="w-full sm:w-auto text-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 uppercase tracking-widest text-sm transition-all duration-300 active:scale-95"
          >
            Забронировать стол
          </a>
          <a
            href="tel:+79027044470"
            className="w-full sm:w-auto text-center border border-white/50 text-white hover:border-white px-8 py-4 uppercase tracking-widest text-sm transition-all duration-300 active:scale-95"
          >
            +7 (902) 704-44-70
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
