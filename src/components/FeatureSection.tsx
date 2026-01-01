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
    <section className={`py-20 lg:py-28 ${bgLight ? "bg-white" : "bg-slate-50"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reversed ? "lg:grid-flow-dense" : ""}`}>
          {/* Phone Mockup - Always first on mobile */}
          <div className={`flex justify-center ${reversed ? "lg:col-start-1" : "lg:col-start-2"} order-1`}>
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

          {/* Content */}
          <div className={`${reversed ? "lg:col-start-2" : "lg:col-start-1"} order-2 text-center lg:text-left`}>
            {/* Title */}
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
              {title}
            </h2>

            {/* Description */}
            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0">
              {description}
            </p>

            {/* Feature List */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-left"
                >
                  <CheckCircle
                    size={24}
                    weight="fill"
                    className="text-cyan-600 flex-shrink-0 mt-0.5"
                  />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
