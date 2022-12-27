import { useContext } from "react"
import InputContext from "../../../Contexts/InputContext"
import CTAButton from "../../../styles/CTAButton"
import { Form } from "./styles"

export default function SubscriptionForm() {

    const inputRef = useContext(InputContext)

    return (
        <Form>
            <input ref={inputRef} type="email" placeholder="Digite seu email aqui" autoFocus></input>
            <CTAButton>Quero Participar</CTAButton>
        </Form >
    )
}