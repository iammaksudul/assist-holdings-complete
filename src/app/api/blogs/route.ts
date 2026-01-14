import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    success: true, 
    message: 'Blogs API endpoint',
    data: []
  })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  return NextResponse.json({ 
    success: true, 
    message: 'Blog created',
    data: body
  })
}
