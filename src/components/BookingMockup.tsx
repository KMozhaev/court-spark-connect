import PhoneMockup from "./PhoneMockup";

const BookingMockup = () => {
  const days = [
    { day: "СБ", date: 28, active: true, label: "Сегодня" },
    { day: "ВС", date: 29, active: false, label: "Завтра" },
    { day: "ПН", date: 30, active: false },
    { day: "ВТ", date: 31, active: false },
    { day: "СР", date: 1, active: false },
  ];

  const slots = ["09:00", "11:00", "15:00", "18:00"];

  return (
    <PhoneMockup>
      <div className="p-4 space-y-6 pt-8">
        {/* Header */}
        <h3 className="text-lg font-display font-bold">Выберите день</h3>

        {/* Date Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {days.map((day) => (
            <div
              key={day.date}
              className={`flex-shrink-0 w-14 py-2 rounded-xl text-center transition-all ${
                day.active
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-foreground"
              }`}
            >
              <p className="text-xs">{day.day}</p>
              <p className="text-lg font-bold">{day.date}</p>
              {day.label && (
                <p className="text-xs opacity-80">{day.label}</p>
              )}
            </div>
          ))}
        </div>

        {/* Time Slots */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-muted-foreground">Доступные слоты</h4>
          <div className="grid grid-cols-4 gap-2">
            {slots.map((slot, index) => (
              <button
                key={slot}
                className={`py-2.5 rounded-lg text-sm font-medium transition-all ${
                  index === 0
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-foreground hover:bg-gray-200"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Book Button */}
        <button className="w-full py-3 bg-primary text-white font-semibold rounded-full mt-4">
          Забронировать 09:00
        </button>
      </div>
    </PhoneMockup>
  );
};

export default BookingMockup;
