const cron = require('node-cron');
const { fetchData, markAsSent } = require('./database');
const { sendEmail } = require('./emailService');

console.log('Cron job service started.');

cron.schedule('*/5 * * * * *', async () => {
    console.log('Checking for unsent messages...');
    const messages = await fetchData();

    if (messages.length > 0) {
        for (const message of messages) {
            const emailSent = await sendEmail('test@example.com', 'Test Email', message.content);
            if (emailSent) {
                await markAsSent(message.id);
                console.log(`Message ${message.id} sent successfully.`);
            }
        }
    } else {
        console.log('No messages to send.');
    }
});
