import React from "react";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacts" className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-serif text-3xl font-bold uppercase tracking-widest mb-6">
              Lomonosov
            </h2>
            <p className="text-primary-foreground/70 text-center md:text-left max-w-xs">
              Изысканная русская кухня, безупречный сервис и неповторимая атмосфера.
            </p>
          </div>

          {/* Contacts */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h3 className="font-serif text-xl font-bold text-secondary uppercase tracking-wider">Контакты</h3>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-secondary mt-1 shrink-0" />
              <p className="text-primary-foreground/90">
                г. Коряжма,<br />
                пр-т им. М.В. Ломоносова д. 5
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-secondary shrink-0" />
              <a href="tel:+79027044470" className="text-primary-foreground/90 hover:text-secondary transition-colors">
                +7 (902) 704-44-70
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Instagram className="w-5 h-5 text-secondary shrink-0" />
              <a href="#" className="text-primary-foreground/90 hover:text-secondary transition-colors">
                @lomonosov_rest
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h3 className="font-serif text-xl font-bold text-secondary uppercase tracking-wider">Режим работы</h3>
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-secondary mt-1 shrink-0" />
              <ul className="space-y-2 text-primary-foreground/90">
                <li className="flex justify-between w-40">
                  <span>Пн–Чт:</span>
                  <span>12:00 – 23:00</span>
                </li>
                <li className="flex justify-between w-40">
                  <span>Пт–Сб:</span>
                  <span>12:00 – 01:00</span>
                </li>
                <li className="flex justify-between w-40">
                  <span>Вс:</span>
                  <span>12:00 – 23:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} LOMONOSOV Restaurant. Все права защищены.
          </p>
          <div className="text-primary-foreground/50 text-sm">
            Разработано с душой
          </div>
        </div>
      </div>
    </footer>
  );
}
