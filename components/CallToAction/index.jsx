import SubscriptionForm from "./SubscriptionForm"
import { Container } from "./styles"

export default function CallToAction() {

    return (
        <Container>
            <h1>Como criar bots do discord que se conectam a outros aplicativos</h1>
            <p>
                Aulão que vou ensinar, mesmo para quem não sabe nada de programação, como criar bots do discord que trazem para o discord conteúdos de jogos, animes, filmes, e qualquer outro aplicativo ou site. <br />
                <b>Evento 100% gratuito e online!!</b>
            </p>

            <SubscriptionForm />
        </Container>
    )
}