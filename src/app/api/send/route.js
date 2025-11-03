import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(request) {
  try {
    // Check if environment variables are set
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'your_resend_api_key_here') {
      console.error('RESEND_API_KEY not configured');
      return Response.json({ error: 'Email service not configured' }, { status: 500 });
    }

    if (!process.env.FROM_EMAIL || process.env.FROM_EMAIL === 'your_verified_sender@domain.com') {
      console.error('FROM_EMAIL not configured');
      return Response.json({ error: 'Sender email not configured' }, { status: 500 });
    }

    const body = await request.json();
    const { email, subject, message } = body;

    console.log('Sending email with data:', { email, subject, message });

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail],
      subject: subject || 'Contact Form Message',
      react: EmailTemplate({ 
        firstName: email?.split('@')[0] || 'Unknown', 
        message: message,
        fromEmail: email 
      }),
    });

    if (error) {
      console.error('Resend API error:', error);
      return Response.json({ error: error.message || 'Failed to send email' }, { status: 500 });
    }

    console.log('Email sent successfully:', data);
    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Route error:', error);
    return Response.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}