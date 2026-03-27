"use client";

import React from 'react';

export default function LiveNewsPage() {
  return (
    <div className="p-5 space-y-6 w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-teal-100 pb-5">
        <h1 className="text-3xl font-black text-teal-700 flex items-center gap-3">
          <span className="w-1.5 h-8 bg-teal-500 rounded-full inline-block" />
          <span className="flex items-center gap-2">
            LIVE TV
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </span>
        </h1>
        <div className="text-slate-500 text-sm font-medium bg-teal-50 px-3 py-1.5 rounded-full border border-teal-100 flex items-center gap-2 shadow-sm">
          <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
          </svg>
          राचित चेतना लाइव ब्रेकिंग न्यूज़
        </div>
      </div>

      {/* Video Container */}
      <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-2 sm:p-4">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-inner bg-slate-900 group">
          <iframe
            className="absolute top-0 left-0 w-full h-full border-0"
            src="https://www.youtube.com/embed/live_stream?channel=UCt4t-jeY85JegMlZ-E5UWtA&autoplay=1&mute=0"
            title="Live News Stream"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-5 px-3 mb-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Rachit Chetna Live - 24x7 News Channel</h2>
            <p className="text-slate-500 text-sm mt-1.5">
              देश और दुनिया की ताज़ा ख़बरों के लिए देखते रहें लाइव न्यूज़ नेटवर्क। पल-पल की अपडेट, सीधा प्रसारण।
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
              Subscribe
            </button>
            <button className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg font-bold text-sm transition-colors shadow-sm border border-slate-200">
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
