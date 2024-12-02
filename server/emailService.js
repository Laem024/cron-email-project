const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.MAILHOG_HOST,
    port: 1025,
    secure: false,
});

async function sendEmail(to, subject, text) {
    try {
        await transporter.sendMail({ from: 'no-reply@example.com', to, subject, text });
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
}

module.exports = { sendEmail };
