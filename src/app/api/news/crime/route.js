import { NextResponse } from 'next/server';
import { CRIMES_NEWS } from '@/datas/data';

export async function GET() {
    return NextResponse.json(CRIMES_NEWS);
}
