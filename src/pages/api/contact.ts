import { NextApiRequest, NextApiResponse } from 'next';
import nodemeiler from 'nodemailer'
import sendgridTranpor from 'nodemailer-sendgrid-transport'


const email = process.env.MAILADRESS;

const transporter = nodemeiler.createTransport(
    sendgridTranpor({
        auth:{
        api_key: process.env.SENDGRID_API_KEY
        }
    })
)

export default async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const {senderMail, name, content} = req.body;

            if(!senderMail.trim() || !name.trim() || !content.trim()) {
                return res.status(430).send('');
            }

            const message = {
                from: email,
                to: email,
                subject: `Nova mensagem de contato - ${name}`,
                html: `<p><b>Email:<b> ${senderMail}<br /><b>Mensagem:</b> ${content}</p>`,
                replyTO: senderMail
            };

            transporter.sendMail(message, (err, info) => {
               
            });

        return res.send('');
        } catch (err) {
            return res.json({
                error: true,
                message: err.message
            });
        }
}