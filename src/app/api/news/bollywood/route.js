import { NextResponse } from 'next/server';
import { BOLLYWOOD_NEWS } from '@/datas/data';

export async function GET() {
    return NextResponse.json(BOLLYWOOD_NEWS);
}
