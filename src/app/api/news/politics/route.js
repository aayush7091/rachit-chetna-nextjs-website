import { NextResponse } from 'next/server';
import { POLITICS_NEWS } from '@/datas/data';

export async function GET() {
    return NextResponse.json(POLITICS_NEWS);
}
