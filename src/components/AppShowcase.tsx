import { useEffect, useRef, useState } from "react";
import mockupHome from "@/assets/mockup-home.jpeg";
import mockupClub from "@/assets/mockup-club.jpeg";
import mockupConfirm from "@/assets/mockup-confirm.jpeg";
import mockupBookings from "@/assets/mockup-bookings.jpeg";

interface ShowcaseItem {
  badge: string;
  title: string;
  description: string;
  features: string[];
  images: string[];
  reverse?: boolean;
}

const showcaseItems: ShowcaseItem[] = [
  {
    badge: "Открытые матчи",
    title: "Найди игроков за 3 клика",
    description:
      "Видишь, кто ищет партнеров прямо сейчас. Уровень игры, время, клуб — всё на одном экране. Присоединяйся к матчу одним тапом.",
    features: [
      "Рейтинг игроков по уровню",
      "Открытые матчи 2×2 в реальном времени",
      "Свободные места на кортах",
    ],
    images: [mockupHome],
  },
  {
    badge: "Бронирование",
    title: "Забронируй корт за 30 секунд",
    description:
      "Все клубы города на карте. Выбери корт, время, способ оплаты. Бронь подтверждается мгновенно.",
    features: [
      "Интеграция с абонементами клубов",
      "Оплата онлайн (ЮКassa)",
      "Напоминания в WhatsApp",
    ],
    images: [mockupClub, mockupConfirm],
    reverse: true,
  },
  {
    badge: "Комьюнити",
    title: "Расширяй свой круг",
    description:
      "Находи игроков своего уровня в своём районе. Добавляй в друзья, следи за активностью, создавай свои матчи.",
    features: [
      "Рекомендации по уровню игры",
      "История матчей и статистика",
      "Рейтинг и достижения",
    ],
    images: [mockupBookings],
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
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-radial" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <h2 className="text-display-lg md:text-display-xl text-center mb-20 md:mb-28 max-w-4xl mx-auto">
          Всё, что нужно для игры —
          <br />в одном приложении
        </h2>

        {/* Showcase Items */}
        <div className="space-y-24 md:space-y-32">
          {showcaseItems.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {/* Text Content */}
              <div className={`space-y-6 ${item.reverse ? "lg:order-2" : ""}`}>
                <span className="inline-block px-4 py-2 text-sm font-semibold text-primary bg-primary/10 border border-primary/30 rounded-full">
                  {item.badge}
                </span>
                <h3 className="text-display-md md:text-display-lg">
                  {item.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-4">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <span className="text-primary text-lg">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image(s) */}
              <div
                className={`relative ${item.reverse ? "lg:order-1" : ""}`}
              >
                {item.images.length === 1 ? (
                  <div className="relative mx-auto w-[280px] md:w-[300px]">
                    <div className="phone-mockup phone-mockup-glow float">
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 -z-10 bg-primary/20 blur-[80px] rounded-full" />
                  </div>
                ) : (
                  <div className="relative h-[500px] flex items-center justify-center">
                    <div className="absolute left-[10%] top-[10%] w-[220px] z-10">
                      <div className="phone-mockup phone-mockup-glow rotate-[-5deg] float">
                        <img
                          src={item.images[0]}
                          alt={item.title}
                          className="w-full h-auto"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="absolute right-[10%] bottom-[10%] w-[200px] z-20">
                      <div className="phone-mockup rotate-[5deg] float-delayed">
                        <img
                          src={item.images[1]}
                          alt={item.title}
                          className="w-full h-auto"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 -z-10 bg-neon-blue/15 blur-[100px] rounded-full" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
