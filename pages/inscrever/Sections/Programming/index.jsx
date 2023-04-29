import Image from 'next/image'
import Title from '../../../../components/Title'
import Container, { EventDescription, ImageContainer } from './styles'

export default function Programming() {

    return (
        <Container>
            <ImageContainer>
                <Image
                    src="/images/calendar2.webp"
                    alt="blue calendar icon"
                    width={400}
                    height={400}
                    layout='responsive'
                />
            </ImageContainer>

            <EventDescription>
                <Title tag='h2'>Programação do evento</Title>
                <p>Durante este aulão eu não só vou ensinar o método para desenvolver bots do discord que se conectam com sites, mas também vou mostrá-lo na prática.</p>
                <p>Vou desenvolver um bot que acessa um site de fontes, coloca o texto digitado pelo usuário do discord e pega uma fonte aleatória e divertida para mandar de volta para o chat.</p>
                <p>Vou mostrar todo o passo a passo para que você saiba como replicar este e outros bots de mesmo estilo!</p>
                <p>O evento ocorrerá na quinta feira, dia 27/04</p>
            </EventDescription>
        </Container>
    )
}