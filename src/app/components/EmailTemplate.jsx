import React from "react";

// Simple email template used by the /api/send route.
// Exported as a named export `EmailTemplate` so it can be rendered
// to a React element and sent via Resend.
export const EmailTemplate = ({ firstName = "Friend", message, fromEmail }) => {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', color: '#0f172a', padding: 24 }}>
      <div style={{ background: '#ffffff', borderRadius: 8, padding: 24 }}>
        <h1 style={{ margin: 0, fontSize: 20, color: '#111827' }}>New Contact Form Message</h1>
        <p style={{ color: '#374151', lineHeight: 1.5, marginTop: 12 }}>
          <strong>From:</strong> {firstName} ({fromEmail})
        </p>
        <p style={{ color: '#374151', lineHeight: 1.5, marginTop: 12 }}>
          <strong>Message:</strong><br />
          {message ?? 'No message provided.'}
        </p>
        <hr style={{ margin: '24px 0', border: 'none', borderTop: '1px solid #e5e7eb' }} />
        <p style={{ color: '#6b7280', fontSize: 14 }}>This message was sent from your portfolio website contact form.</p>
      </div>
    </div>
  );
};

export default EmailTemplate;
