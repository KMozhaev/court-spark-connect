interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

const PhoneMockup = ({ children, className = "" }: PhoneMockupProps) => {
  return (
    <div className={`relative mx-auto w-[260px] md:w-[280px] animate-phone-float ${className}`}>
      {/* Phone Frame */}
      <div className="relative bg-gray-800 rounded-[36px] p-2.5 shadow-phone">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-800 rounded-b-xl z-10" />
        
        {/* Screen */}
        <div className="relative bg-white rounded-[28px] overflow-hidden">
          {children}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-6 bg-primary/15 rounded-full blur-2xl -z-10" />
    </div>
  );
};

export default PhoneMockup;
