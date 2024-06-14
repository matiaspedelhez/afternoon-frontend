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
    const [emailData] = await JSON.parse(req.body ?? "");

    const mailOptions = {
      from: "MS_MzkunI@trial-vywj2lpz29jg7oqz.mlsender.net",
      to: "contacto@afternoon.com.ar",
      subject: "Nuevo mensaje desde página web",
      text: `Your client does not support AMP4EMAIL or amp content is not valid. Displaying unformatted body: ${req.body}`,
      html: `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Correo Electrónico</title><style>body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; } .email-container { background-color: #ffffff; padding: 10px; width: 100%; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); } .header { background-color: #f2efe8; padding: 10px; border-radius: 10px 10px 0 0; text-align: center; color: black; } .content { padding: 20px; } .signature { margin-top: 20px; padding: 10px 0 0 10px; border-top: 1px solid #e0e0e0; color: #555; } .signature p { margin: 5px 0; } </style> </head> <body> <div class="email-container"> <div class="header"> <h1>Afternoon Roastery</h1> </div> <div class="content"> <p><b>Ruta:</b> ${emailData["path-id"]}</p> <p><b>Nombre:</b> ${emailData["first-name"]}</p> <p><b>Apellido:</b> ${emailData["last-name"] ?? ""}</p> <p><b>Correo:</b> ${emailData["email"]}</p> <br> <p>${emailData["message"]}</p> </div> <div class="signature"> <p>${emailData["page-id"]}</p> </div> </div> </body> </html>`,
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
