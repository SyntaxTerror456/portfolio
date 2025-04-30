
import nodemailer from 'nodemailer';


import dotenv from "dotenv";

dotenv.config();

export default function transporter(){
    return nodemailer.createTransport({
        host: 'smtp-relay.brevo.com',
        port:587,
        auth:{
            user: process.env.SMTP_USER as string,
            pass: process.env.SMTP_PASS as string
        }
    })
}