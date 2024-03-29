import { useContext, useState } from "react"
import InputContext from "/Contexts/InputContext"
import Form, { EmailsAdvertising, ErrorSpan } from "./styles"
import isEmail from 'validator/lib/isEmail'
import CTAButton from '/components/CTAButton'
import emailListSubscribe from "/lib/emailListSubscribe"
import { useRouter } from 'next/router'

export default function SubscriptionForm() {
    const inputRef = useContext(InputContext)
    const router = useRouter()
    const [err, setErr] = useState(false)

    async function handleClick(e) {
        e.preventDefault()
        const email = inputRef.current ? inputRef.current.value : null

        if (!isEmail(email)) return setErr(true)
        fbq('track', 'Lead') //Complete Registration can't be used for conversion event on FB advertisement
        emailListSubscribe(email)
            .then(() => router.push('/obrigado'))
            .catch(err => setErr(true))

    }

    return (
        <Form>
            <input ref={inputRef} type="email" className="textInput" placeholder="Digite seu email aqui" autoFocus></input>
            {err ? <ErrorSpan>Digite um email válido</ErrorSpan> : null}
            {/* <EmailsAdvertising>
                O email será utilizado para entrar em conntato com você e disponibilizar mais conteúdo e ofertas. Caso você não queira mais receber os nossos emails, cada email que você receber, incluirá ao final, um link para remover o seu email da nossa lista de distribuição.
                <span><input type='checkbox' checked={true}></input> Concordo em receber os e-mails</span>
            </EmailsAdvertising> */} {/*caso precise concordar em receber emails, por enquanto, acho desnecessário*/}

            <CTAButton href="/obrigado" buttWidth={100} onClick={handleClick}>Quero Participar</CTAButton>
        </Form >
    )
}