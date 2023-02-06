import { NextApiRequest, NextApiResponse } from "next";
import isEmail from 'validator/lib/isEmail'

//sorry for putting typescript on middle of application, but i can't work without it anymore ;D
export default async function emailInscribe(req: NextApiRequest, res: NextApiResponse) {
  const email = req.body.email;

  if (!email) {
    return res.status(400).json({ message: 'Email é obrigatório' });
  }

  if (!isEmail(email)) {
    return res.status(400).json({ message: 'Email inválido' });
  }

  try {
    const response = await fetch('connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: email
      })
    });

    if (!response.ok) {
      throw new Error('Falha na inscrição');
    }

    return res.status(200).json({ message: 'Inscrição realizada com sucesso' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno' });
  }
}
