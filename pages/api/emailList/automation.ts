import { NextApiRequest, NextApiResponse } from "next";
import crypto from 'crypto'
import { config } from "dotenv";
config()

export default function webHooksListeners(req: NextApiRequest, res: NextApiResponse) {
    if (!req.headers['Signature']) return res.status(401).end()
    if (!req.body) return res.status(400).end()

    const signature: string = req.headers['Signature'].toString()
    console.log(signature)

    // Create a hash using the request body and the secret key
    const hash = crypto
        .createHmac('sha256', process.env.API_TOKEN)
        .update(JSON.stringify(req.body))
        .digest('hex');

    if (signature !== hash) return res.status(401).end()

    const newSubscriber = req.body
    console.log(newSubscriber)
    return res.status(200).json(newSubscriber)
}