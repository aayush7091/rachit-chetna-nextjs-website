import { NextResponse } from 'next/server';
import { CATEGORIES } from '@/datas/data';

export async function GET() {
  return NextResponse.json(CATEGORIES);
}
