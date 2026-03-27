"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import TemperatureMeter from './TemperatureMeter';
import Image from 'next/image';

export default function Navbar() {
  const [categories, setCategories] = useState([]);
  const [timeStr, setTimeStr] = useState("");
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    // Fetch categories from the API
    fetch('/api/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Failed to fetch categories:", err));

    // Handle Clock rendering
    const updateTime = () => {
      const currentDate = new Date();
      setTimeStr(currentDate.toLocaleTimeString("hi-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
      setDateStr(currentDate.toLocaleDateString("hi-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" }));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const subNavLinks = [
    { label: "होम", href: "/" },
    { label: "LIVE TV", href: "/live" },
    { label: "चुनाव", href: "/election" },
    { label: "बाज़ार", href: "/business" },
    { label: "क्रिकेट", href: "/cricket" },
    { label: "बॉलीवुड", href: "/bollywood" },
    { label: "विदेश", href: "/foreign" },
    { label: "तकनीक", href: "/technology" },
    { label: "स्वास्थ्य", href: "/health" },
    { label: "धर्म", href: "/religion" },


    { label: "व्यापार", href: "/business" },
    { label: "अपराध", href: "/crime" },
    { label: "शिक्षा", href: "/education" },
    { label: "राजनीति", href: "/politics" },
    { label: "खेल", href: "/sports" },
    { label: "मनोरंजन", href: "/entertainment" },

    { label: "वीडियो", href: "/videos" },
    { label: "शॉर्ट्स", href: "/shorts" },
  ];

  return (
    <header  >
      {/* ===== TOP UTILITY BAR ===== */}
      <div className="bg-teal-50 border-b border-teal-100 px-4 py-1 flex items-center justify-between text-sm text-slate-600 shadow-sm">
        <div className="flex items-center gap-4">
          <span>{dateStr}</span>
          <span>{timeStr}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hover:text-teal-600 cursor-pointer transition-colors">Subscribe</span>
          <span className="hover:text-teal-600 cursor-pointer transition-colors">Notifications</span>
          <span className="hover:text-teal-600 cursor-pointer transition-colors">हिंदी | English</span>
        </div>
      </div>

      {/* ===== NAVBAR ===== */}
      <nav className="bg-white border-b border-teal-100 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">

          {/* Logo */}
  

<Link href="/" className="flex items-center">
  <Image
    src="/logo.png"
    alt="Rachit Chetna Logo"
    width={140}
    height={50}
    className="h-10 w-auto object-contain"
    priority
  />
</Link>

          {/* Nav Links */}
          {/* <div className="hidden md:flex items-center gap-1">
            {categories.map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="px-3 py-1.5 rounded text-sm font-semibold text-slate-600 hover:text-teal-600 hover:bg-teal-50 transition-all"
              >
                {c.name}
              </Link>
            ))}
          </div> */}

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <TemperatureMeter city="Delhi" temp="18" condition="Foggy" />

            <Link
              href="/live"
              className="flex items-center gap-1.5 bg-teal-600 text-white text-sm font-bold px-3 py-2 rounded-lg shadow-sm hover:shadow-md hover:bg-teal-500 transition-all"
            >
              <span className="pulse-dot inline-block w-2 h-2 rounded-full bg-white" />
              LIVE देखें
            </Link>

            <Link
              href="/#app"
              className="flex items-center gap-1.5 border border-teal-600 text-teal-600 text-xs font-bold px-3 py-2 rounded-lg shadow-sm hover:shadow-md hover:bg-teal-50 transition-all"
            >
              📱 App डाउनलोड
            </Link>
          </div>
        </div>

        {/* Category Sub-nav */}
        <div className="border-t border-teal-100 px-4 py-1.5 flex items-center gap-2 overflow-x-auto bg-white shadow-sm">
          {subNavLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-slate-600 hover:text-teal-600 whitespace-nowrap px-2 py-0.5 hover:bg-teal-50 rounded transition-all"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
