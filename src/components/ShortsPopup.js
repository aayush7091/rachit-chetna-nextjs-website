"use client";

import React, { useEffect, useMemo, useState } from "react";

const SHORTS = [
    {
        id: 1,
        title: "आज की बड़ी खबर 60 सेकंड में",
        category: "राजनीति",
        duration: "0:58",
        thumbnail:
            "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=80",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
        id: 2,
        title: "क्रिकेट अपडेट: मैच का पूरा हाल",
        category: "खेल",
        duration: "0:42",
        thumbnail:
            "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=900&q=80",
        video: "https://www.w3schools.com/html/movie.mp4",
    },
    {
        id: 3,
        title: "दिल्ली मौसम अलर्ट",
        category: "मौसम",
        duration: "0:36",
        thumbnail:
            "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=900&q=80",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
        id: 4,
        title: "बॉलीवुड की टॉप हेडलाइंस",
        category: "मनोरंजन",
        duration: "0:51",
        thumbnail:
            "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
        video: "https://www.w3schools.com/html/movie.mp4",
    },
    {
        id: 5,
        title: "बाज़ार में आज क्या हुआ",
        category: "व्यापार",
        duration: "0:49",
        thumbnail:
            "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
        id: 6,
        title: "टेक दुनिया की 3 बड़ी खबरें",
        category: "तकनीक",
        duration: "0:40",
        thumbnail:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
        video: "https://www.w3schools.com/html/movie.mp4",
    },
];

export function ShortsPopup({ isOpen, onClose, shorts = SHORTS }) {
    const [search, setSearch] = useState("");
    const [activeId, setActiveId] = useState(shorts[0]?.id || null);

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

    useEffect(() => {
        if (shorts?.length && !activeId) {
            setActiveId(shorts[0].id);
        }
    }, [shorts, activeId]);

    const filteredShorts = useMemo(() => {
        const q = search.toLowerCase().trim();
        if (!q) return shorts;
        return shorts.filter(
            (item) =>
                item.title.toLowerCase().includes(q) ||
                item.category.toLowerCase().includes(q)
        );
    }, [search, shorts]);

    const activeShort =
        filteredShorts.find((item) => item.id === activeId) || filteredShorts[0];

    useEffect(() => {
        if (filteredShorts.length && !filteredShorts.some((x) => x.id === activeId)) {
            setActiveId(filteredShorts[0].id);
        }
    }, [filteredShorts, activeId]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative h-screen w-screen overflow-hidden bg-slate-50"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md backdrop-blur hover:bg-white hover:text-red-500 transition-all"
                    aria-label="Close popup"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <div className="grid h-full w-full grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
                    {/* LEFT: Active Reel */}
                    <div className="flex h-full items-center justify-center bg-slate-100 p-4 lg:p-6">
                        {activeShort ? (
                            <div className="relative h-full max-h-[92vh] w-full max-w-[420px] overflow-hidden rounded-[28px] border border-slate-200 bg-black shadow-2xl">
                                <video
                                    key={activeShort.id}
                                    src={activeShort.video}
                                    poster={activeShort.thumbnail}
                                    className="h-full w-full object-cover"
                                    controls
                                    autoPlay
                                    loop
                                    playsInline
                                />

                                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 text-white">
                                    <div className="mb-2 inline-flex items-center rounded-full bg-teal-500 px-3 py-1 text-xs font-bold">
                                        {activeShort.category}
                                    </div>
                                    <h2 className="text-xl font-black leading-snug">
                                        {activeShort.title}
                                    </h2>
                                    <p className="mt-2 text-sm text-white/80">
                                        Duration: {activeShort.duration}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex h-full w-full items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white text-slate-500">
                                कोई reel नहीं मिली
                            </div>
                        )}
                    </div>

                    {/* RIGHT: Search + List */}
                    <div className="flex h-full min-h-0 flex-col border-l border-slate-200 bg-white">
                        <div className="border-b border-slate-200 px-5 py-4 pr-16">
                            <h1 className="text-2xl font-black text-slate-800">
                                News Shorts
                            </h1>
                            <p className="mt-1 text-sm text-slate-500">
                                Shorts खोजें और किसी भी reel को तुरंत देखें
                            </p>

                            <div className="relative mt-4">
                                <input
                                    type="text"
                                    placeholder="Shorts खोजें..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                                />
                                <svg
                                    className="absolute left-3 top-3.5 h-5 w-5 text-slate-400"
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

                        <div className="min-h-0 flex-1 overflow-y-auto p-4">
                            <div className="space-y-3">
                                {filteredShorts.length > 0 ? (
                                    filteredShorts.map((item) => {
                                        const isActive = activeShort?.id === item.id;

                                        return (
                                            <button
                                                key={item.id}
                                                onClick={() => setActiveId(item.id)}
                                                className={`flex w-full items-start gap-3 rounded-2xl border p-3 text-left transition-all ${isActive
                                                    ? "border-teal-200 bg-teal-50 shadow-sm"
                                                    : "border-slate-200 bg-white hover:border-teal-100 hover:bg-slate-50"
                                                    }`}
                                            >
                                                <div className="relative h-28 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-200">
                                                    <img
                                                        src={item.thumbnail}
                                                        alt={item.title}
                                                        className="h-full w-full object-cover"
                                                    />
                                                    <span className="absolute bottom-2 right-2 rounded bg-black/70 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                                                        {item.duration}
                                                    </span>
                                                </div>

                                                <div className="min-w-0 flex-1">
                                                    <div className="mb-2 inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-teal-700">
                                                        {item.category}
                                                    </div>
                                                    <h3
                                                        className={`line-clamp-2 text-sm font-bold leading-5 ${isActive ? "text-teal-700" : "text-slate-800"
                                                            }`}
                                                    >
                                                        {item.title}
                                                    </h3>
                                                    <p className="mt-2 text-xs text-slate-500">
                                                        Click to play
                                                    </p>
                                                </div>
                                            </button>
                                        );
                                    })
                                ) : (
                                    <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-10 text-center">
                                        <p className="text-sm font-medium text-slate-600">
                                            "{search}" से संबंधित कोई reel नहीं मिली।
                                        </p>
                                        <button
                                            onClick={() => setSearch("")}
                                            className="mt-2 text-sm font-semibold text-teal-600 hover:underline"
                                        >
                                            खोज मिटाएं
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}