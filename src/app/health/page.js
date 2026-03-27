"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Page() {
 
  const category = "health" 
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/news/${category}`);

        if (!res.ok) {
          setNewsData([]);
          return;
        }

        const data = await res.json();

        // 🔥 handle both formats
        const finalData = Array.isArray(data) ? data : data.news;

        setNewsData(finalData);
      } catch (err) {
        console.error(err);
        setNewsData([]);
      }
    };

    if (category) fetchData();
  }, [category]);

  // loading state
  if (newsData === null) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading...
      </div>
    );
  }

  // empty state
  if (newsData.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        No news found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 md:px-8 py-6">

      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 capitalize text-slate-800">
        {category} News
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((item) => (
          <Link
            key={item.slug}
            href={`/article/${category}_${item.slug}`}  
            className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition"
              />
            </div>

            <div className="p-4">
              <p className="text-xs text-teal-600 font-semibold mb-1">
                {item.category}
              </p>

              <h2 className="text-sm md:text-base font-semibold text-slate-800 line-clamp-2">
                {item.title}
              </h2>

              <p className="text-xs text-gray-500 mt-2">
                {item.time}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}