import CTAButton from "../../../styles/CTAButton"
import { Form } from "./styles"

export default function SubscriptionForm() {
    return (
        <Form>
            <input type="email" placeholder="Digite seu email aqui"></input>
            <CTAButton>Quero Participar</CTAButton>
        </Form >
    )
}