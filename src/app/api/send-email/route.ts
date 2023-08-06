import nodemailer from "nodemailer"
import dotenv from "dotenv"
import { NextRequest, NextResponse } from "next/server"

dotenv.config()

export async function POST(req: NextRequest) {

    const myEmail = process.env.EMAIL
    const password = process.env.PASSWORD

    try {
        const { name, email, message } = await req.json()

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: myEmail,
                pass: password
            },
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
        })

        const mailOptions = {
            from: myEmail,
            to: myEmail,
            subject: "Portfolio Email",
            text: `Name: ${name}\n\nEmail: ${email}\n\nMessage: ${message}`,
        }

        transporter.sendMail(mailOptions, (error: any, info: any) => {
            if (error) {
                console.error(error)
                NextResponse.json({
                    error: "Error sending email: " + error.message,
                    status: 500,
                    success: false,
                })
            } else {
                console.log("Email sent successfully:", info.response)
                NextResponse.json({
                    message: "Email sent!",
                    status: 200,
                    success: true,
                })
            }
        })
        return NextResponse.json({
            message: "Email sent!",
            status: 200,
            success: true
        })

    } catch (error: any) {
        console.log(error)
        return NextResponse.json({
            message: "Error sending email.",
            status: 500,
            success: false
        })
    }
}