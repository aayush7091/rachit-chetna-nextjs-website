import { NextResponse } from 'next/server';
import { BREAKING_NEWS } from '@/datas/data';

export async function GET() {
  return NextResponse.json(BREAKING_NEWS);
}
