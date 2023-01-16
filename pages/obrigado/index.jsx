import Container from './styles'
import Title from '/components/Title'
import Icon from '/components/Icon'
import CTAButton from '/components/CTAButton'

export default function ThanksPage() {
    return (
        <Container>
            <Icon src={'/images/verified.webp'} alt={'Simbolo de confirmação (verificado)'} size={10} />
            <Title tag='h2'>Obrigado por se inscrever, potencialize sua inscrinção com apenas 2 passos:</Title>
            <p>Clique no botão abaixo para entrar no servidor do discord, onde você encontrará todas as informações do evento e poderá participar da comunidade!</p>
            <CTAButton href='https://discord.com' buttWidth={65}>Participar do server</CTAButton>
        </Container>
    )
}