"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ArticlePage() {
  const params = useParams();
  const articleParam = params?.article;

  const [articleData, setArticleData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!articleParam) return;

    const fetchArticle = async () => {
      try {
        // ✅ FIX: no split needed
        const  articleSlug = articleParam;

        const [category, slug] = articleSlug.split("_");
        

        // ⚠️ TEMP: since you only have politics
        const res = await fetch(`/api/news/${category}`);

        if (!res.ok) {
          setArticleData(null);
          setLoading(false);
          return;
        }

        const data = await res.json();

        const newsArray = Array.isArray(data) ? data : data.news;

        const foundArticle = newsArray.find(
          (item) => item.slug === slug
        );

        if (!foundArticle) {
          setArticleData(null);
          setLoading(false);
          return;
        }

        setArticleData({
          ...foundArticle,
          categoryType: "politics",
          author: foundArticle.author || "राचित चेतना डेस्क",
          publishedAt:
            foundArticle.publishedAt ||
            foundArticle.time ||
            "हाल ही में प्रकाशित",
          description:
            foundArticle.description ||
            `${foundArticle.title} से जुड़ी यह खबर राजनीति श्रेणी की प्रमुख अपडेट्स में से एक है।`,
          content:
            foundArticle.content ||
            `${foundArticle.title} से जुड़ी यह खबर फिलहाल डेमो डेटा के रूप में दिखाई जा रही है।

यह समाचार राजनीति category से संबंधित है और पाठकों के लिए महत्वपूर्ण अपडेट प्रस्तुत करता है।`,
          tags: foundArticle.tags || [
            foundArticle.category,
            "politics",
          ],
        });

        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch article:", error);
        setArticleData(null);
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleParam]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500">
        Loading article...
      </div>
    );
  }

  if (!articleData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">
          Article not found
        </h1>
        <p className="text-slate-500 mb-5">
          जिस article को आप खोलना चाहते हैं, वह उपलब्ध नहीं है।
        </p>
        <Link
          href="/"
          className="px-4 py-2 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition"
        >
          Go to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
       

        <article className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
          <img
            src={articleData.img}
            alt={articleData.title}
            className="w-full h-64 md:h-[420px] object-cover"
          />

          <div className="p-5 md:p-8">
            <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">
              {articleData.title}
            </h1>

            <p className="text-slate-500 mb-4">
              {articleData.publishedAt}
            </p>

            <p className="text-lg text-slate-600 leading-8 mb-6">
              {articleData.description}
            </p>

            <div>
              {articleData.content.split("\n").map((para, i) => (
                <p key={i} className="mb-4 text-slate-700">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}