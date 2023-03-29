import Container, { TitleWithImage, StyledTitle } from "./styles";
import Icon from "/components/Icon";

export default function Deliverable({ src, alt, title, text }) {
    return (
        <Container>
            <TitleWithImage>
                <Icon src={src} alt={alt} />
                <StyledTitle color='#3783f5d6' tag='h3'>{title}</StyledTitle>
            </TitleWithImage>

            <p>{text}</p>
        </Container>
    )
}