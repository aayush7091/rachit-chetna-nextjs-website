"use client";

import React, { useState, useEffect, use } from "react";
import Link from "next/link";


const stateNamesHindi = {
  "uttar-pradesh": "उत्तर प्रदेश",
  "delhi": "दिल्ली",
  "bihar": "बिहार",
  "punjab": "पंजाब",
  "madhya-pradesh": "मध्य प्रदेश",
  "jharkhand": "झारखंड",
  "chhattisgarh": "छत्तीसगढ़",
  "gujarat": "गुजरात",
  "haryana": "हरियाणा",
  "himachal-pradesh": "हिमाचल प्रदेश",
  "maharashtra": "महाराष्ट्र",
  "rajasthan": "राजस्थान",
};

export default function StateWiseNewsPage({ params }) {
  const resolvedParams = use(params);
  const stateSlug = resolvedParams?.state;
  const displayStateName = stateNamesHindi[stateSlug] || stateSlug;

  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!stateSlug) return;

    fetch(`/api/news/${stateSlug}`)
      .then((res) => res.json())
      .then((data) => {
        setNews(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [stateSlug]);

  const filteredNews = news.filter(
    (item) =>
      item.title?.toLowerCase().includes(search.toLowerCase()) ||
      item.category?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5 space-y-6 w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-teal-100 pb-5">
        <h1 className="text-3xl font-black text-teal-700 flex items-center gap-3 capitalize">
          <span className="w-1.5 h-8 bg-teal-500 rounded-full inline-block" />
          {displayStateName} न्यूज़
        </h1>

        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder={`${displayStateName} की खबरें खोजें...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm text-slate-700 bg-teal-50/30"
          />
          <svg
            className="w-5 h-5 text-teal-400 absolute left-3 top-2.5"
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

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-teal-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.length > 0 ? (
            <>
              <Link
                href={`/states/article/${stateSlug}_${filteredNews[0].slug}`}
                className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-teal-100 overflow-hidden hover:shadow-md transition-all group block"
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={filteredNews[0].img}
                    alt={filteredNews[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-teal-600 text-white text-sm font-bold px-3 py-1 rounded-lg shadow-sm">
                    {filteredNews[0].category}
                  </span>
                </div>

                <div className="p-5">
                  <h2 className="text-xl md:text-2xl font-black text-slate-800 leading-snug mb-3 group-hover:text-teal-600 transition-colors">
                    {filteredNews[0].title}
                  </h2>

                  <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                    <svg
                      className="w-4 h-4 text-teal-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {filteredNews[0].time}
                  </div>
                </div>
              </Link>

              <div className="hidden lg:block"></div>

              {filteredNews.slice(1).map((item, idx) => {
                const actualIndex = idx + 1;

                return (
                  <Link
                    key={item.slug || idx}
                    href={`/states/article/${stateSlug}_${item.slug}`}
                    className="bg-white rounded-xl shadow-sm border border-teal-50 overflow-hidden hover:shadow-md transition-all group flex flex-col"
                  >
                    <div className="relative h-48 overflow-hidden w-full shrink-0">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-teal-600/90 text-white text-xs font-bold px-2.5 py-1 rounded">
                        {item.category}
                      </span>
                    </div>

                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="font-bold text-slate-800 text-lg leading-snug mb-3 line-clamp-3 group-hover:text-teal-600 transition-colors">
                        {item.title}
                      </h3>

                      <div className="mt-auto flex items-center gap-2 text-sm text-slate-500 font-medium">
                        <svg
                          className="w-4 h-4 text-teal-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {item.time}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : (
            <div className="col-span-full py-16 text-center text-slate-500 bg-teal-50/50 rounded-xl border border-teal-100/50 border-dashed">
              <svg
                className="w-12 h-12 mx-auto text-teal-200 mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <p className="font-medium text-slate-600">
                "{search}" से संबंधित कोई खबर नहीं मिली।
              </p>
              <button
                onClick={() => setSearch("")}
                className="text-teal-600 font-semibold text-sm mt-2 hover:underline"
              >
                खोज मिटाएं
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}