import Container, { BonusLine, BonusText, GuaranteeIcon, BonusTitle, GiftIcon } from "./styles";
import CTAButton from "/components/CTAButton";

export default function BonusSection() {
    return (
        <Container>
            <BonusLine>
                <GiftIcon
                    src={'/images/Bonus1.png'}
                    alt={'Icone de um presente azul simbolizando um bônus'}
                    size={50}
                />
                <BonusText>
                    <BonusTitle tag="h3" align="left">Bônus Exclusivo</BonusTitle>
                    <p>Além de te levar a se tornar um criador de bots do discord com funcionalidades acima do próprio limite do discord (se conectando a internet e apps), você também terá acesso à um bônus de criação de projetos, onde vai aprender a criar projetos de forma mais efetiva, criando bots de forma mais rápida, planejada, limpa e organizada, além de que caso você tenha medo de não ideias para fazer bots interessantes, terá acesso à uma lista de 50 ideias de bots.</p>

                    <p> Para completar ainda receberá um segundo bônus, que serão 7 projetos de bots extras (além dos feitos durante o curso) que você pode acompanhar o desenvolvimento, fazendo a sua própria versão, de cabo a rabo, para que você saia com certeza com pelo menos 7 bots feitos ao final de tudo</p>
                </BonusText>
            </BonusLine>

            <GuaranteeIcon
                src={'/images/garantia.webp'}
                alt={'Icone de um simbolo de garantia de 30 dias'}
                size={40}
            />

            <CTAButton>QUERO ME INSCREVER AGORA!</CTAButton>

        </Container>
    )
}