import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  try {
    // Check if required environment variables are set
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: { message: "RESEND_API_KEY is not configured" } },
        { status: 500 }
      );
    }

    if (!fromEmail) {
      return NextResponse.json(
        { error: { message: "FROM_EMAIL is not configured" } },
        { status: 500 }
      );
    }

    const { email, subject, message } = await req.json();
    
    // Validate input
    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: { message: "Missing required fields: email, subject, or message" } },
        { status: 400 }
      );
    }

    console.log("Sending email:", { to: email, subject, from: fromEmail });
    
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { 
        error: { 
          message: error.message || "Failed to send email",
          details: error.name || "Unknown error"
        } 
      },
      { status: 500 }
    );
  }
}