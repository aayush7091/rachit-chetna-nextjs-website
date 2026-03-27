export default function AdBanner450x90({ 
  bg = "from-teal-100 to-cyan-100",
  // Added a placeholder image suitable for a wide horizontal banner
  imageUrl = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
}) {
  return (
    <div className="p-10 w-full h-36 flex flex-col justify-center items-center">
      
      <div className={`w-full max-w-[450px] h-full rounded-lg bg-gradient-to-r ${bg} border border-teal-500/20 flex items-center justify-center relative overflow-hidden`}>
        
        {/* Background Ad Image */}
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt="Advertisement" 
            className="absolute inset-0 w-full h-full object-cover  mix-blend-multiply"
          />
        )}

        {/* Existing Decorative Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#0d9488 0,#0d9488 1px,transparent 0,transparent 50%)", backgroundSize: "8px 8px" }} />
        
        {/* Label (Added z-10, white background pill, and shadow for readability) */}
      

      </div>

    </div>
  );
}