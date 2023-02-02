export default function emailListSubscribe(email) {
    return fetch('/api/emailList/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email })
    })
        .then(res => {
            if (res.status === 400) throw new Error(`Status code error: ${res.status}`)
            return res.json()
        })
        .then(data => data)
}