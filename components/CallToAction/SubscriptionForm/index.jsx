import { useContext, useState } from "react"
import InputContext from "../../../Contexts/InputContext"
import CTAButton from "../../../styles/CTAButton"
import { ErrorSpan, Form, StyledLink } from "./styles"
import isEmail from 'validator/lib/isEmail';

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
    }

    return (
        <Form>
            <input ref={inputRef} type="email" placeholder="Digite seu email aqui" autoFocus></input>
            {err ? <ErrorSpan>Digite um email válido</ErrorSpan> : null}
            <StyledLink href={'/obrigado'}><CTAButton onClick={handleClick}>Quero Participar</CTAButton></StyledLink>
        </Form >
    )
}