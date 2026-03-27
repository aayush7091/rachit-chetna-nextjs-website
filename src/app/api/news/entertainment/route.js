import { NextResponse } from 'next/server';
import { ENTERTAINMENT_NEWS } from '@/datas/data';

export async function GET() {
    return NextResponse.json(ENTERTAINMENT_NEWS);
}
