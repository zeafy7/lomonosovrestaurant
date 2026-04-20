import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const menuData = {
  "Закуски": [
    { name: "Ассорти сыров", weight: "260г", price: "990₽", desc: "маасдам, чеддер, пармезан, камамбер, мед, виноград" },
    { name: "Плато мясных деликатесов", weight: "200г", price: "999₽" },
    { name: "Овощное ассорти", weight: "150г", price: "320₽" },
    { name: "Говядина сырокопченая", weight: "100г", price: "590₽", new: true },
    { name: "Бочковая сельдь", weight: "300г", price: "520₽" },
    { name: "Гренки с сыром", weight: "200г", price: "320₽" },
    { name: "Сырные крокеты", weight: "200г", price: "390₽" },
    { name: "Рисовые шарики", weight: "200г", price: "390₽" },
    { name: "Груздь со сметаной и луком", weight: "200г", price: "620₽" },
    { name: "Мидии запеченные в сырном соусе", weight: "270г", price: "620₽" },
    { name: "Креветки в соусе сгущенка-васаби", weight: "160г", price: "660₽" },
    { name: "Креветки в панировке", weight: "170г", price: "640₽" },
    { name: "Горячая пивная тарелка", weight: "550г", price: "640₽" },
    { name: "Фруктовая тарелка", weight: "400г", price: "350₽" },
    { name: "Брускетта с семгой и творожным сыром", weight: "150г/3шт", price: "520₽" },
    { name: "Брускетта с ростбифом", weight: "150г/3шт", price: "480₽" },
    { name: "Хлебная корзинка", weight: "80г", price: "80₽" },
  ],
  "Салаты": [
    { name: "Салат с креветкой", weight: "220г", price: "590₽" },
    { name: "Гриль-салат LOMONOSOV", weight: "200г", price: "540₽" },
    { name: "Салат с хрустящими баклажанами", weight: "220г", price: "560₽" },
    { name: "Грузинский овощной со специями", weight: "190г", price: "390₽" },
    { name: "Оливье с лососем", weight: "250г", price: "490₽" },
    { name: "Оливье с говядиной", weight: "270г", price: "450₽" },
    { name: "Цезарь с курицей", weight: "170г", price: "450₽" },
    { name: "Цезарь с креветками", weight: "170г", price: "590₽" },
    { name: "Салат с семгой в ореховом соусе", weight: "220г", price: "580₽" },
    { name: "Салат с курицей и картофелем Пай", weight: "260г", price: "450₽", new: true },
    { name: "Нисуаз с тунцом", weight: "250г", price: "550₽", new: true },
  ],
  "Супы": [
    { name: "Борщ", weight: "300г", price: "360₽" },
    { name: "Финская похлебка", weight: "300г", price: "360₽" },
    { name: "Солянка", weight: "280г", price: "360₽" },
  ],
  "Горячее": [
    { name: "Индейка в панчетте с хашбрауном", weight: "300г", price: "690₽" },
    { name: "Сковородка мясная с картофелем и перцем", weight: "250г", price: "560₽" },
    { name: "Сковородка Оджахури", weight: "250г", price: "590₽" },
    { name: "Свиная шея в бостонском маринаде", weight: "300г", price: "620₽" },
    { name: "Филе форели", weight: "250г", price: "920₽" },
    { name: "Филе палтуса под соусом Свит Чили", weight: "250г", price: "920₽" },
    { name: "Бефстроганов LOMONOSOV", weight: "300г", price: "690₽" },
    { name: "Бифштекс из мраморной говядины", weight: "250г", price: "420₽" },
    { name: "Жаркое из курицы с грибами в горшочке", weight: "350г", price: "490₽" },
    { name: "Жюльен с форелью и брокколи", weight: "200г", price: "490₽" },
    { name: "Треска под соусом Бер Блан", weight: "250г", price: "690₽" },
    { name: "Треска по-монастырски", weight: "350г", price: "699₽" },
    { name: "Свинина в сливочно-чесночном соусе", weight: "350г", price: "490₽" },
    { name: "Креветки в сливочном соусе в горшочке", weight: "350г", price: "640₽" },
    { name: "Филе трески в томатно-винном соусе", weight: "300г", price: "690₽" },
    { name: "Куриная котлета", weight: "250г", price: "350₽", new: true },
    { name: "Тунец в апельсиновой глазури", weight: "350г", price: "550₽", new: true },
  ],
  "Гриль": [
    { name: "Стейк филе-миньон LOMONOSOV", weight: "200г", price: "890₽" },
    { name: "Бургер Сырная пушка", weight: "300г", price: "560₽" },
    { name: "Овощи гриль в ассортименте", weight: "100г", price: "360₽" },
    { name: "Шампиньоны гриль", weight: "100г", price: "350₽" },
  ],
  "Пасты": [
    { name: "Паста карбонара", weight: "300г", price: "440₽" },
    { name: "Паста с цыпленком и грибами", weight: "300г", price: "440₽" },
    { name: "Паста с морепродуктами", weight: "300г", price: "520₽" },
    { name: "Вок со свининой", weight: "330г", price: "440₽" },
    { name: "Вок со сладко-острой курицей", weight: "320г", price: "440₽" },
  ],
  "Детское": [
    { name: "Детский бургер", weight: "280г", price: "290₽" },
    { name: "Куриный супчик", weight: "250г", price: "130₽" },
    { name: "Куриная котлетка с пюре", weight: "140г", price: "250₽" },
    { name: "Наггетсы с картофелем фри и сырным соусом", weight: "220г", price: "380₽" },
  ],
  "Десерты": [
    { name: "Шоколадный фондан с мороженым", weight: "120г", price: "350₽" },
    { name: "Сырники с вишнёвым джемом", weight: "200г", price: "280₽" },
    { name: "Блинчики", weight: "150г", price: "120₽" },
    { name: "Медовик", weight: "140г", price: "200₽" },
    { name: "Торт Красный бархат", weight: "150г", price: "260₽" },
    { name: "Чизкейк Нью-Йорк", weight: "170г", price: "280₽" },
    { name: "Мороженое пломбир", weight: "40г", price: "150₽" },
    { name: "Меренговый рулет с вишней", weight: "150г", price: "260₽", new: true },
  ],
  "Напитки": [
    { name: "Эспрессо", weight: "Кофе", price: "90₽" },
    { name: "Американо", weight: "Кофе", price: "100₽" },
    { name: "Капучино", weight: "Кофе", price: "170₽" },
    { name: "Латте", weight: "Кофе", price: "190₽" },
    { name: "Раф", weight: "Кофе", price: "220₽" },
    { name: "Чай черный/зеленый/авторский", weight: "Чай", price: "120/200₽" },
    { name: "Морс", weight: "Соки/морсы", price: "90/360₽" },
    { name: "Сок", weight: "Соки/морсы", price: "90/360₽" },
    { name: "Фреш апельсиновый", weight: "Соки/морсы", price: "350₽" },
    { name: "Напиток Мягкий солод", weight: "Пиво", price: "110/180₽" },
    { name: "Велкопоповицкий Козел темное", weight: "Пиво", price: "288₽" },
    { name: "Балтика б/а", weight: "Пиво", price: "198₽" },
    { name: "Вишневый Эль", weight: "Пиво", price: "595₽" },
    { name: "Пшеничный Эль", weight: "Пиво", price: "595₽" },
    { name: "Яблочный сидр", weight: "Пиво", price: "595₽" },
    { name: "Васька", weight: "Пиво", price: "335₽" },
    { name: "Глинтвейн 200мл", weight: "Коктейли б/а", price: "250₽" },
    { name: "Пепси фреш", weight: "Коктейли б/а", price: "150₽" },
    { name: "Медовый апельсин", weight: "Коктейли б/а", price: "350₽" },
    { name: "Мистический синий", weight: "Коктейли б/а", price: "200₽" },
    { name: "Лонг Айленд", weight: "Коктейли алкогольные", price: "490₽" },
    { name: "Оазис", weight: "Коктейли алкогольные", price: "450₽" },
    { name: "Морской коктейль", weight: "Коктейли алкогольные", price: "200₽" },
    { name: "Апероль Шприц", weight: "Коктейли алкогольные", price: "380₽" },
    { name: "Мартини Роял", weight: "Коктейли алкогольные", price: "380₽" },
    { name: "Глинтвейн", weight: "Коктейли алкогольные", price: "420₽" },
    { name: "Шато Тамань красное", weight: "Вина", price: "275/1650₽" },
    { name: "Элитайо Монтепульчано", weight: "Вина", price: "500/3000₽" },
    { name: "Домен Ги Муссе", weight: "Вина", price: "3600₽" },
  ]
};

const categories = Object.keys(menuData) as Array<keyof typeof menuData>;

export default function Menu() {
  const [activeTab, setActiveTab] = useState<keyof typeof menuData>(categories[0]);

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-4">Основное Меню</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        {/* Tabs — горизонтальный скролл на мобильном */}
        <div className="flex overflow-x-auto gap-2 md:gap-4 mb-10 md:mb-16 pb-2 md:justify-center md:flex-wrap scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={cn(
                "flex-shrink-0 px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-300 text-xs md:text-base uppercase tracking-wider",
                activeTab === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground hover:bg-muted"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 md:gap-y-8 max-w-5xl mx-auto">
          {menuData[activeTab].map((item, index) => (
            <motion.div
              key={item.name + index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="flex flex-col border-b border-border/50 pb-4"
            >
              <div className="flex justify-between items-start mb-1 gap-2">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <h3 className="font-serif text-base md:text-xl font-bold text-foreground leading-tight">
                    {item.name}
                  </h3>
                  {item.new && (
                    <span className="text-[9px] uppercase tracking-wider bg-secondary text-secondary-foreground px-2 py-0.5 rounded-sm font-bold flex-shrink-0">
                      New
                    </span>
                  )}
                </div>
                <div className="font-serif text-base md:text-xl font-bold text-primary whitespace-nowrap">
                  {item.price}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-1 text-muted-foreground text-xs md:text-sm">
                <span>{item.weight}</span>
                {item.desc && (
                  <>
                    <span className="text-border">•</span>
                    <span className="italic">{item.desc}</span>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
