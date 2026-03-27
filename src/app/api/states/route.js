import { NextResponse } from 'next/server';
import { STATES } from '@/datas/data';

export async function GET() {
  return NextResponse.json(STATES);
}
