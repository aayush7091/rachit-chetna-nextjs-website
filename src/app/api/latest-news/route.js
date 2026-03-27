import { NextResponse } from 'next/server';
import { LATEST_NEWS } from '@/datas/data';

export async function GET() {
  return NextResponse.json(LATEST_NEWS);
}
