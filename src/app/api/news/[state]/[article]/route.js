import { NextResponse } from "next/server";
import { stateWiseNews } from "@/datas/data";


export async function GET(req, { params }) {
    try {

        console.log("heloo welcome to server");

        const { state, article } = await params;

        const stateData = stateWiseNews.find((item) => item.state === state);

        if (!stateData) {
            return NextResponse.json(
                { success: false, message: "State not found" },
                { status: 404 }
            );
        }

        const foundArticle = stateData.news.find((item) => item.slug === article);

        if (!foundArticle) {
            return NextResponse.json(
                { success: false, message: "Article not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                article: {
                    ...foundArticle,
                    state,
                    author: foundArticle.author || "राचित चेतना डेस्क",
                    date: foundArticle.date || foundArticle.time || "हाल ही में प्रकाशित",
                    content:
                        foundArticle.content ||
                        `${foundArticle.title} से जुड़ी यह खबर ${state} राज्य की प्रमुख अपडेट्स में से एक है।`,
                    tags: foundArticle.tags || [foundArticle.category, state],
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Article API error:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error" },
            { status: 500 }
        );
    }
}


export async function POST(req, { params }) {
    try {
        const { state, article } = await params;

        const stateData = stateWiseNews.find((item) => item.state === state);

        if (!stateData) {
            return NextResponse.json(
                { success: false, message: "State not found" },
                { status: 404 }
            );
        }

        const foundArticle = stateData.news.find((item) => item.slug === article);

        if (!foundArticle) {
            return NextResponse.json(
                { success: false, message: "Article not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                article: {
                    ...foundArticle,
                    state,
                    author: foundArticle.author || "राचित चेतना डेस्क",
                    date: foundArticle.date || foundArticle.time || "हाल ही में प्रकाशित",
                    content:
                        foundArticle.content ||
                        `${foundArticle.title} से जुड़ी यह खबर ${state} राज्य की प्रमुख अपडेट्स में से एक है।`,
                    tags: foundArticle.tags || [foundArticle.category, state],
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Article API error:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error" },
            { status: 500 }
        );
    }
}
