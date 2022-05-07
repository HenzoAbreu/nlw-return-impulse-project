import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "a5365e18cdf7c3",
      pass: "4b63c31b4711f8"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
            await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Henzo Abreu <henzo.abreu2@gmail.com>',
        subject,
        html: body,
    })
    };
}