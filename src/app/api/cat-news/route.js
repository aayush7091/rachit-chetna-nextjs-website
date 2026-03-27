import { NextResponse } from 'next/server';
import { CAT_NEWS } from '@/datas/data';

export async function GET() {
  return NextResponse.json(CAT_NEWS);
}
