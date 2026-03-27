
export default function TemperatureMeter({ city, temp, condition }) {
  const colors = { Sunny: "#f97316", Cloudy: "#94a3b8", Rainy: "#38bdf8", Foggy: "#cbd5e1" };
  return (
    <div className="flex items-center gap-2 bg-gray-900/80 border border-gray-700 rounded-lg px-3 py-1.5">
      <div className="text-2xl font-black" style={{ color: colors[condition] || "#f97316" }}>{temp}°</div>
      <div>
        <div className="text-white text-xs font-semibold leading-none">{city}</div>
        <div className="text-gray-400 text-[10px]">{condition}</div>
      </div>
    </div>
  );
}
