import { useContext, useState } from "react"
import InputContext from "/Contexts/InputContext"
import { ErrorSpan, Form } from "./styles"
import isEmail from 'validator/lib/isEmail'
import CTAButton from '/components/CTAButton'
import emailListSubscribe from "/lib/emailListSubscribe"

export default function SubscriptionForm() {

    const inputRef = useContext(InputContext)
    const [err, setErr] = useState(false)

    function handleClick(e) {

        const email = inputRef.current ? inputRef.current.value : null

        if (!isEmail(email)) {
            setErr(true)
            e.preventDefault() //cancels next Link
            return
        }

        try {
            emailListSubscribe(email)
        }
        catch (err) {
            setErr(true)
            console.log(err)
        }
    }

    return (
        <Form>
            <input ref={inputRef} type="email" placeholder="Digite seu email aqui" autoFocus></input>
            {err ? <ErrorSpan>Digite um email válido</ErrorSpan> : null}
            <CTAButton href={'/obrigado'} onClick={handleClick}>Quero Participar</CTAButton>
        </Form >
    )
}