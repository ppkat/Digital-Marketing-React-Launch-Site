import CTAButton from '/styles/CTAButton'
import Container from './styles'
import Title from '/components/Title'

export default function ThanksPage() {
    return (
        <Container>
            <Title tag='h1'>Como criar bots do discord que se conectam a outros aplicativos</Title>
            <h3>Clique no botão abaixo para entrar no servidor do discord, onde você encontrará todas as informações do evento e poderá participar da comunidade</h3>
            <CTAButton>Entrar no grupo</CTAButton>
        </Container>
    )
}