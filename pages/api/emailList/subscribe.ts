import { NextApiRequest, NextApiResponse } from "next";
import isEmail from 'validator/lib/isEmail'

//sorry for putting typescript on middle of application, but i can't work without it anymore ;D
export default function emailInscribe(req: NextApiRequest, res: NextApiResponse) {

  if (!isEmail(req.body.email)) return res.status(400)

  return res.status(200).json(req.body)
}
