import { Container, EventNameContainer } from "./styles";
import Timer from "/components/Timer"

export default function EventTimer() {
    return (
        <Container>
            <EventNameContainer>๐แ ร๐ข๐๐กฮนแด ๐ฟ0 B๐๐</EventNameContainer>
            <Timer date={new Date(2023, 1, 1, 20)} />
        </Container>
    )
}