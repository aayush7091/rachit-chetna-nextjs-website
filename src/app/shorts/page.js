"use client";

import React, { useState, useEffect } from "react";
import { ShortsPopup } from "@/components/ShortsPopup"; // adjust path

export default function ShortsPage() {
  const [openShorts, setOpenShorts] = useState(false);

  // ✅ Auto open on page load
  useEffect(() => {
    setOpenShorts(true);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-50">
      {/* very soft background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-teal-100/50 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative flex h-full w-full items-center justify-center p-6">
        <div className="w-full max-w-5xl overflow-hidden rounded-[28px] border border-teal-100 bg-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-4 py-2 text-sm font-bold text-teal-700 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
                RC Shorts
              </div>

              <h1 className="mt-5 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
                राचित <span className="text-teal-600">चेतना</span>
                <br />
                <span className="text-slate-800">News Shorts</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                60 सेकंड में बड़ी खबरें देखें। तेज़, साफ़ और premium shorts experience।
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-2xl border border-teal-100 bg-teal-50 px-4 py-3 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Format
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-800">Vertical Shorts</p>
                </div>

                <div className="rounded-2xl border border-teal-100 bg-white px-4 py-3 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Experience
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-800">Search + Scroll</p>
                </div>

                <div className="rounded-2xl border border-cyan-100 bg-cyan-50 px-4 py-3 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Brand
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-800">Rachit Chetna</p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setOpenShorts(true)}
                  className="inline-flex items-center gap-3 rounded-2xl bg-teal-600 px-7 py-4 text-lg font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-teal-500 hover:shadow-lg"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                    ▶
                  </span>
                  View Shorts
                </button>

                <div className="text-sm text-slate-500">
                  Latest bite-sized updates from
                  <span className="ml-1 font-bold text-teal-700">राचित चेतना</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="relative hidden items-center justify-center bg-gradient-to-br from-teal-100 to-cyan-100 p-10 lg:flex">
              <div className="relative flex items-center gap-6">
                <div className="w-[240px] rounded-[30px] border-4 border-slate-900 bg-slate-900 p-2 shadow-2xl">
                  <div className="mx-auto mb-2 h-1.5 w-20 rounded-full bg-slate-700" />
                  <div
                    className="relative overflow-hidden rounded-[24px] bg-black"
                    style={{ aspectRatio: "9 / 16" }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=80"
                      alt="News Shorts preview"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow">
                      LIVE SHORTS
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs font-semibold text-white/80">राचित चेतना</p>
                      <h3 className="mt-1 text-lg font-black leading-snug">
                        बड़ी खबरें अब shorts format में
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-white p-4 shadow-lg">
                    <p className="text-xs font-bold uppercase tracking-wide text-teal-600">
                      Breaking
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-800">
                      Daily news updates in short format
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-lg">
                    <p className="text-xs font-bold uppercase tracking-wide text-teal-600">
                      Smart UI
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-800">
                      Search, select and watch instantly
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-lg">
                    <p className="text-xs font-bold uppercase tracking-wide text-teal-600">
                      Fast Access
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-800">
                      Click the button to enter Shorts mode
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* popup should be OUTSIDE the content wrapper */}
      <ShortsPopup
        isOpen={openShorts}
        onClose={() => setOpenShorts(false)}
      />
    </div>
  );
}