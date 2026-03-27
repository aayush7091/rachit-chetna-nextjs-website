"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

export default function VideosPopup({
  isOpen,
  onClose,
  videos = [],
  initialVideoId,
}) {
  const [search, setSearch] = useState("");
  const [activeId, setActiveId] = useState(initialVideoId || videos[0]?.id || null);

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -260,
      behavior: "smooth",
    });
  };
  
  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 260,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (initialVideoId) {
      setActiveId(initialVideoId);
    }
  }, [initialVideoId]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const filteredVideos = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return videos;

    return videos.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [search, videos]);

  const activeVideo =
    filteredVideos.find((item) => item.id === activeId) || filteredVideos[0];

  useEffect(() => {
    if (
      filteredVideos.length &&
      !filteredVideos.some((item) => item.id === activeId)
    ) {
      setActiveId(filteredVideos[0].id);
    }
  }, [filteredVideos, activeId]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative h-[100dvh] w-screen overflow-hidden bg-slate-50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-full flex-col px-4 pb-4 pt-4 md:px-6 lg:px-8">
          {/* Top Bar */}
          <div className="mb-3 flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur">
  
  {/* LEFT - Title */}
  <div className="min-w-[120px]">
    <h1 className="text-lg font-black text-slate-800 md:text-xl">
      Videos
    </h1>
    <p className="text-xs text-slate-500 md:text-sm">
      Watch instantly
    </p>
  </div>

  {/* CENTER - Search */}
  <div className="flex-1 flex justify-center">
    <div className="relative w-full max-w-[420px]">
      <input
        type="text"
        placeholder="Search videos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
      />
      <svg
        className="absolute left-3 top-3 h-4 w-4 text-slate-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  </div>

  {/* RIGHT - Close */}
  <button
    onClick={onClose}
    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 shadow-sm transition hover:bg-white hover:text-red-500"
  >
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
</div>
  
          {/* Video Player */}
          <div className="min-h-0 flex-1 overflow-hidden">
            <div className="flex h-full items-center justify-center">
              {activeVideo ? (
                <div className="relative w-full max-w-4xl overflow-hidden rounded-[22px] border border-slate-200 bg-black  aspect-video">
                  <iframe
                    key={activeVideo.id}
                    src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&mute=1&rel=0`}
                    title={activeVideo.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
  
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
                    <div className="mb-2 inline-flex items-center rounded-full bg-teal-500 px-3 py-1 text-[10px] font-bold">
                      {activeVideo.category}
                    </div>
                    <h2 className="text-base font-black leading-snug md:text-lg">
                      {activeVideo.title}
                    </h2>
                    <p className="mt-1 text-[11px] text-white/80 md:text-xs">
                      Duration: {activeVideo.duration}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex h-full w-full max-w-5xl items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white text-slate-500">
                  No video found
                </div>
              )}
            </div>
          </div>
  
          {/* Smaller Bottom Slider */}
          <div className="relative">
  {/* Left Button */}
  <button
    onClick={scrollLeft}
    className="absolute left-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition hover:bg-slate-100"
    aria-label="Scroll left"
  >
    <ChevronLeft className="h-5 w-5" />
  </button>

  {/* Slider */}
  <div
    ref={sliderRef}
    className="no-scrollbar flex gap-3 overflow-x-auto px-10 py-2 scroll-smooth"
    >
    {filteredVideos.map((item) => {
      const isActive = activeVideo?.id === item.id;

      return (
        <button
          key={item.id}
          onClick={() => setActiveId(item.id)}
          className={`min-w-[200px] max-w-[200px] overflow-hidden rounded-xl border text-left transition-all ${
            isActive
              ? "border-teal-300 bg-teal-50 shadow-sm"
              : "border-slate-200 bg-white hover:border-teal-100 hover:bg-slate-50"
          }`}
        >
          {/* Top Image */}
          <div className="relative h-28 w-full overflow-hidden bg-slate-200">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-full w-full object-cover"
            />
            <span className="absolute bottom-1.5 right-1.5 rounded bg-black/75 px-1.5 py-0.5 text-[9px] font-semibold text-white">
              {item.duration}
            </span>
          </div>
  
          {/* Bottom Content */}
          <div className="p-2.5">
            <h3
              className={`line-clamp-2 text-xs font-semibold leading-4 ${
                isActive ? "text-teal-700" : "text-slate-800"
              }`}
            >
              {item.title}
            </h3>
          </div>
        </button>
      );
    })}
  </div>

  {/* Right Button */}
  <button
    onClick={scrollRight}
    className="absolute right-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition hover:bg-slate-100"
    aria-label="Scroll right"
  >
    <ChevronRight className="h-5 w-5" />
  </button>
</div>
        </div>
      </div>
    </div>
  );
}