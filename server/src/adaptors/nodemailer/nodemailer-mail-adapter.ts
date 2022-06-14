import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "54c2e613be815a",
      pass: "6ac779ee230585"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Eu <email@email.com",
            subject,
            html: body,
        });
    };
}