import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3ae3c91e84aa13",
      pass: "088886b2e9547a"
    }
});

export class NodemailerEmailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Felipe Wandork <wandork@gmail.com>',
            subject,
            html: body,
        });
    }
}