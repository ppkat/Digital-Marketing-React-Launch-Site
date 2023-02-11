import WebhookData from '/types/emailList/webhookData'

async function createWeebhook({ name, events, url }: WebhookData) {

    if (typeof events === 'string') events = [events]

    const response = await fetch('https://connect.mailerlite.com/api/webhooks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.API_TOKEN}`
        },
        body: JSON.stringify({
            name,
            events,
            url
        })
    })

    return (await response.json())
}

createWeebhook({ name: 'Subscription automation', events: 'subscriber.created', url: 'https://discordultrabots.com/api/automation' })