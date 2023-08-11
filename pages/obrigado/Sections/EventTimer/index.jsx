import Container, { EventNameContainer } from "./styles";
import Timer from "/components/Timer"

export default function EventTimer() {
    return (
        <Container>
            <EventNameContainer>𝘐ηɖúʂᖶɾ𝕚ą 𝔡໐ ๖σᵗ</EventNameContainer>
            <Timer date={new Date(2023, 5, 1, 20)} />
        </Container>
    )
}