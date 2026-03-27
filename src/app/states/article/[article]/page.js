import { notFound } from "next/navigation";
import ArticleView from "@/components/ArticleView";

export default async function ArticlePage({ params }) {
    try {

        const { article } = await params;

        if (!article) {
            notFound();
        }

        // ✅ split using "_"
        const [state, articleSlug] = article.split("_");

        if (!state || !articleSlug) {
            notFound();
        }

        console.log(article);

        const baseUrl =
            process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

        const res = await fetch(`${baseUrl}/api/news/${state}/${articleSlug}`, {
            cache: "no-store",
        });
        if (!res.ok) {
            notFound();
        }

        const data = await res.json();

        if (!data?.success || !data?.article) {
            notFound();
        }

        return (
            <div className="min-h-screen bg-slate-50 p-5">
                <ArticleView article={data.article} />
            </div>
        );
    } catch (error) {
        console.error("Article page error:", error);
        notFound();
    }
}