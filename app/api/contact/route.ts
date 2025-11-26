import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '所有欄位都是必填的' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '請輸入有效的電子郵件地址' },
        { status: 400 }
      )
    }

    // Here you would typically send an email or save to database
    // For now, we'll just return a success response
    console.log('Contact form submission:', { name, email, subject, message })

    return NextResponse.json(
      {
        success: true,
        message: '訊息已成功發送！我會盡快回覆您。',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: '發送失敗，請稍後再試。' },
      { status: 500 }
    )
  }
}

