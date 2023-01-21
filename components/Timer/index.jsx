import { useState } from "react";
import NumberSquare from "./NumberSquare";
import { Container } from "./styles";

export default function Timer({ date }) {

    const [currentDate, setCurrentDate] = useState(new Date())

    const timeLeft = date - currentDate
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    setTimeout(() => {
        setCurrentDate(new Date())
    }, 1000)

    return (
        <Container>
            <NumberSquare value={days}></NumberSquare>
            <NumberSquare value={hours}></NumberSquare>
            <NumberSquare value={minutes}></NumberSquare>
            <NumberSquare value={seconds}></NumberSquare>
        </Container>
    )
}