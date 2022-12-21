import { Container, TitleWithImage } from "./styles";
import Icon from "./Icon";

export default function Deliverable({ src, alt, title, text }) {
    return (
        <Container>
            <TitleWithImage>
                <Icon src={src} alt={alt} />
                <h2>{title}</h2>
            </TitleWithImage>

            <p>{text}</p>
        </Container>
    )
}