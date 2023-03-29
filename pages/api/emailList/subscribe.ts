import { NextApiRequest, NextApiResponse } from "next";
import isEmail from 'validator/lib/isEmail'
import { config } from 'dotenv'
config()

//sorry for putting typescript on middle of application, but i can't work without it anymore ;D
export default async function emailInscribe(req: NextApiRequest, res: NextApiResponse) {
  console.log('this message should be called only once')
  const email: string | undefined | null = req.body.email;

  if (!email) {
    return res.status(400).json({ message: 'Email é obrigatório' });
  }

  if (!isEmail(email)) {
    return res.status(400).json({ message: 'Email inválido' });
  }

  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.API_TOKEN}`
      },
      body: JSON.stringify({
        email: email,
        groups: ['79660365469714267']
      })
    })

    console.log((await response.json()).data.groups)

    if (!response.ok) {
      throw new Error('Falha na inscrição');
    }

    return res.status(200).json({ message: 'Inscrição realizada com sucesso' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno' });
  }
}
