import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "@phosphor-icons/react";
import screen2 from "@/assets/screen-2.jpeg";
import screen3 from "@/assets/screen-3.jpeg";
import screen4 from "@/assets/screen-4.jpeg";
import screen5 from "@/assets/screen-5.jpeg";

interface ShowcaseItem {
  title: string;
  description: string;
  features: string[];
  image: string;
  reverse?: boolean;
  bgColor: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    title: "Находи партнёров мгновенно",
    description:
      "Видишь, кто ищет партнеров прямо сейчас. Уровень игры, время, клуб — всё на одном экране.",
    features: [
      "Рейтинг игроков по уровню",
      "Открытые матчи в реальном времени",
      "Фильтры по локации и времени",
    ],
    image: screen2,
    bgColor: "bg-surface",
  },
  {
    title: "Бронируй корт за 30 секунд",
    description:
      "Все клубы города на карте. Выбери корт, время, способ оплаты. Бронь подтверждается мгновенно.",
    features: [
      "Интеграция с абонементами клубов",
      "Оплата онлайн",
      "Напоминания о бронировании",
    ],
    image: screen3,
    reverse: true,
    bgColor: "bg-background-secondary",
  },
  {
    title: "Расширяй свой круг",
    description:
      "Находи игроков своего уровня в своём районе. Добавляй в друзья, следи за активностью.",
    features: [
      "Рекомендации по уровню игры",
      "История матчей и статистика",
      "Рейтинг и достижения",
    ],
    image: screen4,
    bgColor: "bg-surface",
  },
  {
    title: "Делись расходами легко",
    description:
      "Раздели стоимость корта с партнёрами. Каждый платит свою долю — просто и прозрачно.",
    features: [
      "Автоматический расчёт долей",
      "Уведомления об оплате",
      "История транзакций",
    ],
    image: screen5,
    reverse: true,
    bgColor: "bg-background-secondary",
  },
];

const AppShowcase = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting && !visibleItems.includes(index)) {
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <section id="features" className="py-16 md:py-24">
      {showcaseItems.map((item, index) => (
        <div
          key={item.title}
          ref={(el) => (itemRefs.current[index] = el)}
          data-index={index}
          className={`py-16 md:py-24 ${item.bgColor}`}
        >
          <div className="container mx-auto">
            <div
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {/* Text Content */}
              <div className={`space-y-6 ${item.reverse ? "lg:order-2" : ""}`}>
                <h2 className="text-display-lg text-foreground">
                  {item.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-4">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-foreground text-base"
                    >
                      <CheckCircle size={24} weight="duotone" className="text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Phone Mockup */}
              <div className={`flex justify-center ${item.reverse ? "lg:order-1" : ""}`}>
                <div className="relative w-[280px] md:w-[350px] float">
                  <div className="phone-frame">
                    <div className="phone-notch" />
                    <div className="phone-screen relative aspect-[9/19]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain bg-white"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AppShowcase;