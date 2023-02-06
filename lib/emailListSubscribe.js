export default function emailListSubscribe(email) {
    return fetch('/api/emailList/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    })
        .then(res => {
            if (res.status === 400) throw new Error(`Status code error: ${res.status}`)
            return res.json()
        })
        .then(data => data.email)
        .catch(err => {
            console.log(err)
            throw err
        })
}