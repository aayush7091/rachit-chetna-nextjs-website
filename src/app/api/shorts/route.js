import { NextResponse } from 'next/server';
import { SHORTS } from '../../../datas/data';

export async function GET() {
  return NextResponse.json(SHORTS);
}
