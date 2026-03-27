import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-teal-100  shadow-sm">
      {/* Top Section */}
      <div className="px-8 py-8 grid grid-cols-4 gap-6">

        {/* Logo + About */}
        <div>

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

             <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
          भारत का सबसे विश्वसनीय हिंदी न्यूज़ चैनल। सच, तेज़ और निष्पक्ष
          पत्रकारिता के साथ देश और दुनिया की हर बड़ी खबर आप तक।
        </p>
        </div>

        {/* Dynamic Sections */}
        {[
          ["त्वरित लिंक", [
            { label: "होम", href: "/" },
            { label: "LIVE TV", href: "/live" },
            { label: "वीडियो", href: "/videos" },
            { label: "Shorts", href: "/shorts" },
            { label: "App", href: "/#app" }
          ]],
          ["श्रेणियाँ", [
            { label: "चुनाव", href: "/election" },
            { label: "क्रिकेट", href: "/cricket" },
            { label: "बॉलीवुड", href: "/bollywood" },
            { label: "धर्म", href: "/religion" },
            { label: "ऑटो", href: "/auto" }
          ]],
          ["संपर्क", [
            { label: "contact@rachitchetna.com", href: "mailto:contact@rachitchetna.com" },
            { label: "1800-XXX-XXXX", href: "tel:1800000000" },
            { label: "नई दिल्ली, भारत", href: "/" }
          ]]
        ].map(([title, items]) => (
          <div key={title}>
            <h4 className="text-slate-800 font-bold text-base mb-3">
              {title}
            </h4>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-600 text-sm hover:text-teal-600 cursor-pointer transition-all hover:translate-x-1 block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-teal-100 px-8 py-4 flex items-center justify-between bg-teal-50">
        <p className="text-slate-600 text-sm">
          © 2025 राचित चेतना News Network. सर्वाधिकार सुरक्षित।
        </p>
        <div className="flex gap-5 text-slate-600 text-sm">
          <span className="hover:text-teal-600 cursor-pointer transition-colors">गोपनीयता नीति</span>
          <span className="hover:text-teal-600 cursor-pointer transition-colors">नियम व शर्तें</span>
          <span className="hover:text-teal-600 cursor-pointer transition-colors">विज्ञापन</span>
        </div>
      </div>
    </footer>
  );
}
