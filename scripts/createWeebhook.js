const https = require('https');
require('dotenv').config()

async function createWeebhook({ name, events, url }) {

    if (typeof events === 'string') events = [events]

    const postData = JSON.stringify({
        name,
        events,
        url
    });

    const options = {
        hostname: 'connect.mailerlite.com',
        path: '/api/webhooks',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.API_TOKEN}`
        }
    };

    const req = https.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            console.log(JSON.parse(data));
        });
    });

    req.on('error', (error) => {
        console.error(error);
    });

    req.write(postData);
    req.end();
}

createWeebhook({ name: 'Subscription automation ngrok', events: 'subscriber.created', url: 'https://cd94-138-255-223-35.sa.ngrok.io/api/emailList/automation' });