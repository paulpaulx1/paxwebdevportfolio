import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, type, budget, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // TODO: Replace with your preferred delivery method.
    // Options:
    //   1. Resend:   npm install resend → import { Resend } from 'resend'
    //   2. Nodemailer + SMTP
    //   3. Forward to a Slack webhook
    //
    // Example with Resend:
    //
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'portfolio@yourdomain.com',
    //   to: 'paul@yourdomain.com',
    //   subject: `New inquiry from ${name}`,
    //   html: `
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Type:</strong> ${type}</p>
    //     <p><strong>Budget:</strong> ${budget}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `,
    // })

    console.log('Contact form submission:', { name, email, type, budget, message })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
