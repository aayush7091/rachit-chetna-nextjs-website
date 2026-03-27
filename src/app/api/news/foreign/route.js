import { NextResponse } from 'next/server';
import { FOREIGN_NEWS } from '@/datas/data';

export async function GET() {
    return NextResponse.json(FOREIGN_NEWS);
}
