import { NextResponse } from 'next/server';
import { TECHNOLOGY_NEWS } from '@/datas/data';

export async function GET() {
    return NextResponse.json(TECHNOLOGY_NEWS);
}
