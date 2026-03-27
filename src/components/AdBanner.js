
export default function AdBanner({ label = "Advertisement", height = "h-24", bg = "from-orange-900/30 to-red-900/30" }) {
  return (
    <div className={`w-full ${height} rounded-lg bg-gradient-to-r ${bg} border border-orange-500/20 flex items-center justify-center relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#f97316 0,#f97316 1px,transparent 0,transparent 50%)", backgroundSize: "8px 8px" }} />
      <span className="text-orange-400/60 text-xs font-bold tracking-widest uppercase">{label}</span>
    </div>
  );
}
