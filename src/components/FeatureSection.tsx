import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "@phosphor-icons/react";

interface FeatureSectionProps {
  title: string;
  description: string;
  features: string[];
  mockupContent: React.ReactNode;
  reversed?: boolean;
  grayBg?: boolean;
}

const FeatureSection = ({
  title,
  description,
  features,
  mockupContent,
  reversed = false,
  grayBg = false,
}: FeatureSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section-padding ${grayBg ? "bg-background" : "bg-white"}`}
    >
      <div className="container mx-auto">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            reversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Text Content */}
          <div
            className={`space-y-6 ${reversed ? "lg:order-2" : ""} ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } transition-all duration-700`}
          >
            <h2 className="text-display-lg">{title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={feature}
                  className="flex items-start gap-3"
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <CheckCircle
                    size={24}
                    weight="fill"
                    className="text-primary flex-shrink-0 mt-0.5"
                  />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mockup */}
          <div
            className={`${reversed ? "lg:order-1" : ""} ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } transition-all duration-700 delay-200`}
          >
            {mockupContent}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
