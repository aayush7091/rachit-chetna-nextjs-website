import { NextResponse } from 'next/server';
import { SPORTS_NEWS } from '@/datas/data';

export async function GET() {
    return NextResponse.json(SPORTS_NEWS);
}
