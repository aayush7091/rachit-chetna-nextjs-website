import { NextResponse } from "next/server";
import { stateWiseNews } from "@/datas/data"; // adjust path

export async function GET(request, context) {
    try {
        const { state } = await context.params; // ✅ await the whole params object

        if (!state) {
            return NextResponse.json(
                { error: "State param missing", news: [] },
                { status: 400 }
            );
        }

        const normalizedState = state.toLowerCase().trim();

        const stateData = stateWiseNews.find(
            (s) => s.state.toLowerCase().trim() === normalizedState
        );

        if (stateData) {
            return NextResponse.json(stateData.news || []);
        }

        return NextResponse.json(
            { error: "State not found", news: [] },
            { status: 404 }
        );
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Internal server error", news: [] },
            { status: 500 }
        );
    }
}