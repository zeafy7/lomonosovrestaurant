import React from "react";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacts" className="bg-primary text-primary-foreground pt-14 md:pt-20 pb-8 md:pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-16 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-widest mb-4 md:mb-6">
              Lomonosov
            </h2>
            <p className="text-primary-foreground/70 max-w-xs text-sm md:text-base">
              Изысканная русская кухня, безупречный сервис и неповторимая атмосфера.
            </p>
          </div>

          {/* Contacts */}
          <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-6">
            <h3 className="font-serif text-lg md:text-xl font-bold text-secondary uppercase tracking-wider">Контакты</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-secondary mt-1 shrink-0" />
              <p className="text-primary-foreground/90 text-sm md:text-base">
                г. Коряжма,<br />
                пр-т им. М.В. Ломоносова д. 5
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-secondary shrink-0" />
              <a href="tel:+79027044470" className="text-primary-foreground/90 hover:text-secondary transition-colors text-sm md:text-base">
                +7 (902) 704-44-70
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Instagram className="w-4 h-4 md:w-5 md:h-5 text-secondary shrink-0" />
              <a href="#" className="text-primary-foreground/90 hover:text-secondary transition-colors text-sm md:text-base">
                @lomonosov_rest
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-6">
            <h3 className="font-serif text-lg md:text-xl font-bold text-secondary uppercase tracking-wider">Режим работы</h3>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-secondary mt-1 shrink-0" />
              <ul className="space-y-2 text-primary-foreground/90 text-sm md:text-base">
                <li className="flex justify-between gap-6">
                  <span>Пн–Чт:</span>
                  <span>12:00 – 23:00</span>
                </li>
                <li className="flex justify-between gap-6">
                  <span>Пт–Сб:</span>
                  <span>12:00 – 01:00</span>
                </li>
                <li className="flex justify-between gap-6">
                  <span>Вс:</span>
                  <span>12:00 – 23:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call button — только на мобильном */}
        <div className="md:hidden mb-8">
          <a
            href="tel:+79027044470"
            className="flex items-center justify-center gap-3 w-full bg-secondary text-secondary-foreground font-bold text-lg py-4 rounded-xl active:scale-95 transition-all duration-200"
          >
            <Phone className="w-5 h-5" />
            Позвонить
          </a>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-primary-foreground/50 text-xs md:text-sm text-center">
            © {new Date().getFullYear()} LOMONOSOV Restaurant. Все права защищены.
          </p>
          <div className="text-primary-foreground/50 text-xs md:text-sm">
            Разработано с душой
          </div>
        </div>
      </div>
    </footer>
  );
}
