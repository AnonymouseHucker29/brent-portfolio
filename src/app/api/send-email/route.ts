import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { NextRequest, NextResponse } from "next/server";

dotenv.config();

const myEmail = process.env.EMAIL;
const password = process.env.PASSWORD;

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: myEmail,
        pass: password,
      },
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
    });

    const mailOptions = {
      from: myEmail,
      to: myEmail,
      subject: "Portfolio Email",
      text: `Name: ${name}\n\nEmail: ${email}\n\nMessage: ${message}`,
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error: any, info: any) => {
        if (error) {
          console.error(error);
          reject(error);
        } else {
          console.log("Email sent successfully:", info.response);
          resolve(info.response);
        }
      });
    });
    return NextResponse.json({
      name: name,
      email: email,
      message: message,
      status: 200,
      success: true,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({
      message: "Error sending email.",
      status: 500,
      success: false,
    });
  }
}
