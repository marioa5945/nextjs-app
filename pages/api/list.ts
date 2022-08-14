// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface ifsData {
  id: string;
  name: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ifsData[]>
) {
  res.status(200).json([
    { id: "1", name: "John Doe" },
    { id: "2", name: "John Doe2" },
    { id: "3", name: "John Doe2" },
  ]);
}
