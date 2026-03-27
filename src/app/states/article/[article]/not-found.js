export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="text-center bg-white border border-slate-200 rounded-2xl shadow-sm p-8 max-w-lg w-full">
                <h1 className="text-2xl font-black text-slate-800 mb-3">
                    Article not found
                </h1>
                <p className="text-slate-500">
                    जिस article को आप खोलना चाहते हैं, वह उपलब्ध नहीं है।
                </p>
            </div>
        </div>
    );
}