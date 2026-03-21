import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "dummy_key");

export async function POST(req: NextRequest) {
  const { name, email, company, problem } = await req.json();

  if (!name || !email || !problem) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Real Solutions PH <onboarding@resend.dev>",
    to: "executives.realsolutions.ph@gmail.com",
    replyTo: email,
    subject: `New Estimate Request from ${name}`,
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8fafc;">
        <div style="background: #0F1F3D; border-radius: 16px; padding: 32px; margin-bottom: 24px;">
          <h1 style="color: #ffffff; margin: 0 0 4px; font-size: 22px;">New Estimate Request</h1>
          <p style="color: #94a3b8; margin: 0; font-size: 14px;">Submitted via realsolutionsph.com</p>
        </div>

        <div style="background: #ffffff; border-radius: 16px; padding: 32px; border: 1px solid #e2e8f0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; width: 140px;">
                <span style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Full Name</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                <span style="font-size: 15px; color: #1e293b; font-weight: 500;">${name}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                <span style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Email</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                <a href="mailto:${email}" style="font-size: 15px; color: #0ea5e9; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                <span style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Company</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                <span style="font-size: 15px; color: #1e293b;">${company || "Not specified"}</span>
              </td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 8px;">Biggest Operational Problem</p>
            <div style="background: #f8fafc; border-left: 3px solid #0ea5e9; border-radius: 4px; padding: 16px;">
              <p style="font-size: 15px; color: #1e293b; margin: 0; line-height: 1.6;">${problem}</p>
            </div>
          </div>
        </div>

        <p style="text-align: center; font-size: 12px; color: #94a3b8; margin-top: 24px;">
          Reply directly to this email to respond to ${name}.
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
