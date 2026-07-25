import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, subject, message, honeypot } = body;

    // 1. Spam Prevention Check (Honeypot)
    if (honeypot && honeypot.trim().length > 0) {
      return NextResponse.json(
        { success: false, error: "Spam submission detected." },
        { status: 400 }
      );
    }

    // 2. Server-side Input Validation
    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All required fields must be filled out." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 3. Supabase Message Storage (if configured)
    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ) {
      try {
        await supabase.from("contact_messages").insert([
          {
            full_name: fullName,
            email: email,
            subject: subject,
            message: message,
            created_at: new Date().toISOString(),
          },
        ]);
      } catch (err) {
        console.warn("Supabase insertion skipped or unconfigured:", err);
      }
    }

    // 4. Resend Email Dispatch (if configured)
    if (resend) {
      try {
        await resend.emails.send({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: ["shyaravivek2307@gmail.com"],
          replyTo: email,
          subject: `Portfolio Contact: ${subject}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; background-color: #0b0914; color: #ffffff;">
              <h2 style="color: #a855f7;">New Contact Message from Portfolio</h2>
              <p><strong>Sender:</strong> ${fullName} (${email})</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <hr style="border: 1px solid rgba(255,255,255,0.1);" />
              <p style="white-space: pre-wrap; font-size: 15px; color: #d4d4d8;">${message}</p>
            </div>
          `,
        });
      } catch (err) {
        console.warn("Resend email send error:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully. I will get back to you soon.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process request. Please try again." },
      { status: 500 }
    );
  }
}
