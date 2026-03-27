import { NextResponse } from 'next/server';
import { EDUCATION_NEWS } from '@/datas/data';

export async function GET() {
    return NextResponse.json(EDUCATION_NEWS);
}
