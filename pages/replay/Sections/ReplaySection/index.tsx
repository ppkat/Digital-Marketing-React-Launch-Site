import Title from '/components/Title'
import CTAButton from '/components/CTAButton'
import Container from './styles'

export default function ReplaySection() {
    return (
        <Container>
            <Title color='#307de2' tag="h2">Como criar bots do discord que se conectam a outros aplicativos</Title>
            <iframe src="https://www.youtube.com/embed/T6I0KACMKY8" title="Wébnário - Indústria do bot" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <CTAButton href="/obrigado" buttWidth={100}>QUERO ME INSCREVER AGORA</CTAButton>
        </Container>
    )
}