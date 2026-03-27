import { NextResponse } from 'next/server';
import { BUSINESS_NEWS } from '@/datas/data';

export async function GET() {
    return NextResponse.json(BUSINESS_NEWS);
}
