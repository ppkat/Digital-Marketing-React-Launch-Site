import { NextApiRequest, NextApiResponse } from "next";
import crypto from 'crypto'
import { config } from "dotenv";
config()

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const API_KEY = process.env.API_TOKEN;

    if (req.method === 'POST') {
        const signature = req.headers['signature'] as string;
        const payload = JSON.stringify(req.body);
        const hash = crypto.createHmac('sha256', API_KEY).update(payload).digest('hex');

        console.log(signature, hash)

        if (signature !== hash) {
            res.status(403).end();
            return;
        }

        const event = req.body.event;
        if (event.type === 'subscriber.created') {
            const { id, email, fields } = event.data;
            console.log(`New subscriber: ${email}, ID: ${id}, Name: ${fields.name}`);
        }

        res.status(200).end();
    } else {
        res.status(405).end();
    }
}
