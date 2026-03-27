import { NextResponse } from 'next/server';
import { CRICKET_NEWS } from '@/datas/data';

export async function GET() {
    return NextResponse.json(CRICKET_NEWS);
}
