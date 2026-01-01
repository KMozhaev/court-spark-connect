import { CheckCircle } from "@phosphor-icons/react";

interface FeatureSectionProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  reversed?: boolean;
  bgLight?: boolean;
}

const FeatureSection = ({
  title,
  description,
  features,
  image,
  imageAlt,
  reversed = false,
  bgLight = false,
}: FeatureSectionProps) => {
  return (
    <section className={`py-20 lg:py-28 ${bgLight ? "bg-b2b-background-secondary" : "bg-b2b-background"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 lg:items-start">
          {/* Content */}
          <div className={`${reversed ? "lg:order-2" : "lg:order-1"} order-2 text-center lg:text-left self-start`}>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-b2b-text-primary mb-4">
              {title}
            </h2>

            <p className="text-lg text-b2b-text-secondary mb-8 max-w-lg mx-auto lg:mx-0">
              {description}
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-left justify-center lg:justify-start"
                >
                  <CheckCircle
                    size={24}
                    weight="fill"
                    className="text-b2b-primary flex-shrink-0 mt-0.5"
                  />
                  <span className="text-b2b-text-primary font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Phone Mockup */}
          <div className={`flex justify-center ${reversed ? "lg:order-1 lg:justify-start" : "lg:order-2 lg:justify-end"} order-1 self-start`}>
            <div className="phone-float" style={{ perspective: "1000px" }}>
              <div className="phone-mockup w-[280px] md:w-[320px]">
                <div className="phone-screen aspect-[9/19.5]">
                  <img
                    src={image}
                    alt={imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
