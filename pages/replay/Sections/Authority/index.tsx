import Container, { ExpertName } from './styles'
import { ExpertDescription, ExpertIcon } from './styles'

export default function Authority() {
    return (
        <Container>
            <ExpertIcon
                src="/images/croppedExpert.png"
                alt=""
            />

            <ExpertDescription>
                <ExpertName tag='h2' align='left'>JOÃO PEREIRA</ExpertName>
                <p>João Pereira é um desenvovedor que depois de criar diversos tipos de bots do discord e até trabalhar com isso, se apaixonou por este mundo do desenvolvimento, ficando sempre maravilhado com as infinitas possibilidades existentes de comandos e funcionalidades diferentes que podem ser criados. Para poder ver mais este mundo de bots do discord crescer, decidiu ajudar outros usuários do discord a desenvolverem seus próprios bots que se conectam à sites e aplicativos da web para poder ampliar cada vez mais a diversidade no discord, e trazer mais pessoas para esse universo incrível da tecnologia.</p>
            </ExpertDescription>

        </Container>
    )
}