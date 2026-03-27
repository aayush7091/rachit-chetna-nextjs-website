import { NextResponse } from 'next/server';
import { ELECTION_NEWS } from '@/datas/data';

export async function GET() {
    return NextResponse.json(ELECTION_NEWS);
}
