import { NextResponse } from 'next/server';
import { STATE_NEWS_ITEMS } from '@/datas/data';

export async function GET() {
  return NextResponse.json(STATE_NEWS_ITEMS);
}
