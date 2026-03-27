export default function AdBanner300x250({ 
  bg = "from-teal-100 to-cyan-100",
  // Added a placeholder image suitable for a standard medium rectangle ad
  imageUrl = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop"
}) {
  return (
    <div className={`w-full h-48 rounded-lg bg-gradient-to-r ${bg} border border-teal-500/20 flex items-center justify-center relative overflow-hidden`}>
      
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
      
   
    </div>
  );
}