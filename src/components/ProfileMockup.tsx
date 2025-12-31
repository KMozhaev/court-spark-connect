import PhoneMockup from "./PhoneMockup";

const ProfileMockup = () => {
  const stats = [
    { value: "24", label: "игры сыграно", color: "bg-primary" },
    { value: "48", label: "часов на корте", color: "bg-orange-500" },
    { value: "156", label: "друзей", color: "bg-cyan-500" },
  ];

  return (
    <PhoneMockup>
      <div className="p-4 pt-8 text-center">
        {/* Avatar */}
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="w-full h-full bg-primary rounded-full flex items-center justify-center text-3xl font-bold text-white">
            А
          </div>
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-accent rounded-full border-2 border-white" />
        </div>

        {/* Name */}
        <h3 className="text-lg font-display font-bold mb-1">Александр Козлов</h3>
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
          3.5 • Средний+
        </span>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-3 bg-background rounded-xl"
            >
              <p className={`text-2xl font-display font-bold ${
                stat.color === "bg-primary" ? "text-primary" :
                stat.color === "bg-orange-500" ? "text-orange-500" : "text-cyan-500"
              }`}>
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </PhoneMockup>
  );
};

export default ProfileMockup;
