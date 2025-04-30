import transporter from "@/nodemailer/nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, subject, massage } = reqBody;

    // ✅ Input validation
    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is missing" }, 
        { status: 400 });
    }

    if (!subject) {
      return NextResponse.json(
        { success: false, message: "Subject is missing" },
         { status: 400 });
    }

    if (!massage) {
      return NextResponse.json(
        { success: false, message: "Message is missing" },
         { status: 400 });
    }

    // 📧 Email options
    const mailOption = {
      from: email,
      to: process.env.RECEIVER_EMAIL as string,
      subject: subject,
      html: `<p>Dear Sir,</p><p>${massage}</p>`, 
    };

    const mailTransporter = transporter();

    await mailTransporter.sendMail(mailOption);

    return NextResponse.json(
      {
        success: true,
        message: "Message successfully sent",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("Email error:", error.message);
    return NextResponse.json(
      {
        success: false,
        message: "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
