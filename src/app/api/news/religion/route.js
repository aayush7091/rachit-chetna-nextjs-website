import { NextResponse } from 'next/server';
import { RELIGION_NEWS } from '@/datas/data';

export async function GET() {
    return NextResponse.json(RELIGION_NEWS);
}
