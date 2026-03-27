import AdBanner450x90 from "@/components/AdBanner450x90";
import AdBanner160x600 from "@/components/AdBanner160x600";
import StateNavigation from "@/components/StateNavigation";

export default function StatesLayout({ children }) {
  return (
    <>
      <div className="px-4 py-2">
        <AdBanner450x90 />
      </div>

      <div className="flex gap-4 px-4 pb-8 items-start">
        <aside className="w-52 shrink-0 space-y-4 hidden md:block">
          <AdBanner160x600 />
          <StateNavigation />
        </aside>

        <main className="flex-1 min-w-0 bg-white shadow-sm rounded-xl overflow-hidden border border-teal-100 min-h-[50vh] flex items-center justify-center">
          {children}
        </main>
      </div>
    </>
  );
}
