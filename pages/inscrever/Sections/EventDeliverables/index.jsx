import Container, { Title, DeliverablesRow, DeliverablesCollum } from "./styles";
import Deliverable from "./Deliverable";

export default function EventDeliverables() {

    class Delivery {
        constructor({ src, alt, title, text }) {
            this.src = src
            this.alt = alt
            this.title = title
            this.text = text
        }
    }

    const Deliveries = [
        new Delivery({
            src: "/images/youtube-logo-icon-transparent---32.webp",
            alt: "Logo do Youtube",
            title: "Aula ao vivo",
            text: "O evento vai contar um uma aula ao vivo para ensinar o passo para passo a criar bots do discord que se conectam com sites."
        }),
        new Delivery({
            src: "/images/discord_chat1.webp",
            alt: "Logo do Discord",
            title: "Servidor do Discord",
            text: "Durante o evento você terá acesso a um servidor exclusivo do discord, onde poderá usar para pedir ajuda para desenvolver o bot, conversar com outros participantes, receber as informações de acesso ao evento e até poder ver os testes do bot funcionando ao vivo no dia do evento"
        }),
        new Delivery({
            src: "/images/bot_icon.webp",
            alt: "icone ilustrativo de um bot do discord",
            title: "Bot feito do zero",
            text: "Na aula vamos criar juntos um bot do discord que se conecta à um site de fontes de internet, mesmo que você não saiba nada de programação. Ao final também será disponibilizado o código fonte do bot, para que você não perca nada."
        }),
        new Delivery({
            src: "/images/questionMark.webp",
            alt: "interrogação com estilo de mario",
            title: "Tira dúvidas",
            text: "Teremos ao final da aula um tempo específico para que você mande suas dúvidas e elas possam ser respondidas ao vivo"
        })
    ]

    return (
        <Container>
            <Title>Entregáveis do evento</Title>

            <DeliverablesCollum>
                {
                    Deliveries.map((delivery, i, arr) => (
                        ((i + 1) % 2 !== 0) ? (
                            <DeliverablesRow key={i}>
                                <Deliverable
                                    src={delivery.src}
                                    alt={delivery.alt}
                                    title={delivery.title}
                                    text={delivery.text}
                                />

                                {
                                    arr[i + 1] ?

                                        <Deliverable
                                            src={arr[i + 1].src}
                                            alt={arr[i + 1].alt}
                                            title={arr[i + 1].title}
                                            text={arr[i + 1].text}
                                        />
                                        : null
                                }

                            </DeliverablesRow>
                        )
                            : null
                    ))
                }
            </DeliverablesCollum>
        </Container>
    )
}