export default async function emailListSubscribe(email) {
    try {
        const res = await fetch('/api/emailList/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
        if (res.status === 400)
            throw new Error(`Status code error: ${res.status}`)

        const data = await res.json()
        return data.email
    } catch (err) {
        console.log(err)
        throw err
    }
}