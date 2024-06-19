import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { text } = req.query;

    if (typeof text === "string" && text.length) {
      const encodedText = encodeURIComponent(text ?? "");

      res.writeHead(307, {
        Location: `https://wa.me/5493794906932?text=${encodedText}`,
      });
      res.end();
    } else {
      res
        .status(500)
        .json({ error: "An error occurred while sending the message" });
    }
  }
}
