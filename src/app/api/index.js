const nodemailer = require("nodemailer")
const myEmail = process.env.EMAIL
const password = process.env.PASSWORD

module.exports = async (req, res) => {
    try {
        const { name, email, message } = req.body

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: myEmail,
                pass: password,
            },
        })

        const mailOptions = {
            from: myEmail,
            to: myEmail,
            subject: "Portfolio Email",
            text: `Name: ${name}\n\nEmail: ${email}\n\nMessage: ${message}`,
        }

        await transporter.sendMail(mailOptions)

        res.status(200).json({ message: "Email sent successfully" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Failed to send email" })
    }
}