export default function AdBanner160x600({ 
  bg = "from-teal-100 to-cyan-100",
  // Added a placeholder image with a portrait orientation
  imageUrl = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400&auto=format&fit=crop"
}) {
  return (
    <div className={`w-full h-64 rounded-lg bg-gradient-to-r ${bg} border border-teal-500/20 flex items-center justify-center relative overflow-hidden`}>
      
      {/* Background Ad Image */}
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt="Advertisement" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
        />
      )}

      {/* Existing Decorative Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#0d9488 0,#0d9488 1px,transparent 0,transparent 50%)", backgroundSize: "8px 8px" }} />
      
      {/* Label (Added z-10, white background pill, and shadow for readability) */}
    
    </div>
  );
}