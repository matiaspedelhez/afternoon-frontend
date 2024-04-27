import { NextApiRequest, NextApiResponse } from "next";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.mailersend.net",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log(req.body);
    const mailOptions = {
      from: "MS_MzkunI@trial-vywj2lpz29jg7oqz.mlsender.net",
      to: "matiaspedelhez@gmail.com",
      subject: "Mayorista - Nuevo mensaje desde página web",
      text: `${req.body}`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({ error: "An error occurred while sending the email" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
