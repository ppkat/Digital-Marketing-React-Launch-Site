import { Container, SquareDiv } from "./styles";

export default function NumberSquare({ value }) {
    return (
        <Container>
            <SquareDiv>{value}</SquareDiv>
        </Container>
    )
}