"use client";

import { useMemo, useState, useEffect } from "react";
import VideosPopup from "@/components/VideosPopup";



const VIDEOS = [
  {
    id: 1,
    title: "Breaking News",
    category: "Politics",
    duration: "2:14",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Political Debate",
    category: "Debate",
    duration: "3:05",
    thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
    youtubeId: "ysz5S6PUM-U",
  },
  {
    id: 3,
    title: "Live News",
    category: "Live",
    duration: "1:58",
    thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg",
    youtubeId: "ScMzIvxBSi4",
  },
  {
    id: 4,
    title: "Economy Update",
    category: "Business",
    duration: "2:40",
    thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
    youtubeId: "aqz-KE-bpKQ",
  },
  {
    id: 5,
    title: "World Headlines",
    category: "World",
    duration: "4:12",
    thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
    youtubeId: "ysz5S6PUM-U",
  },
  {
    id: 6,
    title: "Tech Bulletin",
    category: "Technology",
    duration: "2:22",
    thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg",
    youtubeId: "ScMzIvxBSi4",
  },
  {
    id: 4,
    title: "Economy Update",
    category: "Business",
    duration: "2:40",
    thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
    youtubeId: "aqz-KE-bpKQ",
  },
  {
    id: 5,
    title: "World Headlines",
    category: "World",
    duration: "4:12",
    thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
    youtubeId: "ysz5S6PUM-U",
  },
  {
    id: 6,
    title: "Tech Bulletin",
    category: "Technology",
    duration: "2:22",
    thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg",
    youtubeId: "ScMzIvxBSi4",
  },
  {
    id: 4,
    title: "Economy Update",
    category: "Business",
    duration: "2:40",
    thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
    youtubeId: "aqz-KE-bpKQ",
  },
  {
    id: 5,
    title: "World Headlines",
    category: "World",
    duration: "4:12",
    thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
    youtubeId: "ysz5S6PUM-U",
  },
  {
    id: 6,
    title: "Tech Bulletin",
    category: "Technology",
    duration: "2:22",
    thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg",
    youtubeId: "ScMzIvxBSi4",
  },
  {
    id: 4,
    title: "Economy Update",
    category: "Business",
    duration: "2:40",
    thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
    youtubeId: "aqz-KE-bpKQ",
  },
  {
    id: 5,
    title: "World Headlines",
    category: "World",
    duration: "4:12",
    thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
    youtubeId: "ysz5S6PUM-U",
  },
  {
    id: 6,
    title: "Tech Bulletin",
    category: "Technology",
    duration: "2:22",
    thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg",
    youtubeId: "ScMzIvxBSi4",
  },
  {
    id: 4,
    title: "Economy Update",
    category: "Business",
    duration: "2:40",
    thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
    youtubeId: "aqz-KE-bpKQ",
  },
  {
    id: 5,
    title: "World Headlines",
    category: "World",
    duration: "4:12",
    thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
    youtubeId: "ysz5S6PUM-U",
  },
  {
    id: 6,
    title: "Tech Bulletin",
    category: "Technology",
    duration: "2:22",
    thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg",
    youtubeId: "ScMzIvxBSi4",
  },
  {
    id: 4,
    title: "Economy Update",
    category: "Business",
    duration: "2:40",
    thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
    youtubeId: "aqz-KE-bpKQ",
  },
  {
    id: 5,
    title: "World Headlines",
    category: "World",
    duration: "4:12",
    thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
    youtubeId: "ysz5S6PUM-U",
  },
  {
    id: 6,
    title: "Tech Bulletin",
    category: "Technology",
    duration: "2:22",
    thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg",
    youtubeId: "ScMzIvxBSi4",
  },
  {
    id: 4,
    title: "Economy Update",
    category: "Business",
    duration: "2:40",
    thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
    youtubeId: "aqz-KE-bpKQ",
  },
  {
    id: 5,
    title: "World Headlines",
    category: "World",
    duration: "4:12",
    thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
    youtubeId: "ysz5S6PUM-U",
  },
  {
    id: 6,
    title: "Tech Bulletin",
    category: "Technology",
    duration: "2:22",
    thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg",
    youtubeId: "ScMzIvxBSi4",
  },
  {
    id: 4,
    title: "Economy Update",
    category: "Business",
    duration: "2:40",
    thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
    youtubeId: "aqz-KE-bpKQ",
  },
  {
    id: 5,
    title: "World Headlines",
    category: "World",
    duration: "4:12",
    thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
    youtubeId: "ysz5S6PUM-U",
  },
  {
    id: 6,
    title: "Tech Bulletin",
    category: "Technology",
    duration: "2:22",
    thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg",
    youtubeId: "ScMzIvxBSi4",
  },
  {
    id: 4,
    title: "Economy Update",
    category: "Business",
    duration: "2:40",
    thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
    youtubeId: "aqz-KE-bpKQ",
  },
  {
    id: 5,
    title: "World Headlines",
    category: "World",
    duration: "4:12",
    thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
    youtubeId: "ysz5S6PUM-U",
  },
  {
    id: 6,
    title: "Tech Bulletin",
    category: "Technology",
    duration: "2:22",
    thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg",
    youtubeId: "ScMzIvxBSi4",
  },
];

export default function VideosPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState(VIDEOS[0]?.id || null);
  const [search, setSearch] = useState("");



  useEffect(() => {
    setIsPopupOpen(true);
  }, []);

  const filteredVideos = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return VIDEOS;

    return VIDEOS.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [search]);

  const openPopupWithVideo = (videoId) => {
    setActiveVideoId(videoId);
    setIsPopupOpen(true);
  };

 

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 inline-flex rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-700">
              Video Section
            </div>
            <h1 className="text-3xl font-black text-slate-900 md:text-4xl">
              Latest Videos
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
              Browse featured videos and open them in a full popup experience.
            </p>
          </div>

          <button
            onClick={() => setIsPopupOpen(true)}
            className="rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
          >
            Open Videos Player
          </button>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search videos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
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

        {/* Videos Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredVideos.map((video) => (
            <button
              key={video.id}
              onClick={() => openPopupWithVideo(video.id)}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:border-teal-100 hover:shadow-md"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-200">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
                <span className="absolute bottom-3 right-3 rounded-md bg-black/75 px-2 py-1 text-xs font-semibold text-white">
                  {video.duration}
                </span>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg">
                    <svg
                      className="ml-1 h-6 w-6 text-teal-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6 4l10 6-10 6V4z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-teal-700">
                  {video.category}
                </div>
                <h2 className="line-clamp-2 text-lg font-bold text-slate-800">
                  {video.title}
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Click to open in popup
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <VideosPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        videos={VIDEOS}
        initialVideoId={activeVideoId}
      />
    </div>
  );
}