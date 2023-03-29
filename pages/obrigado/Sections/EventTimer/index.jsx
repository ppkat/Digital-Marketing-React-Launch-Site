import Container, { EventNameContainer } from "./styles";
import Timer from "/components/Timer"

export default function EventTimer() {
    return (
        <Container>
            <EventNameContainer>𝕀ᎠÚ𝓢𝕋𝓡ιᴀ 𝘿0 B𝐎𝘛</EventNameContainer>
            <Timer date={new Date(2023, 1, 1, 20)} />
        </Container>
    )
}