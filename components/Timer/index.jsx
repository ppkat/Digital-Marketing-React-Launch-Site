import { useEffect, useState } from "react";
import NumberSquare from "./NumberSquare";
import { Container, SquareWithText } from "./styles";

export default function Timer({ date }) {

    const [currentDate, setCurrentDate] = useState(() => new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date())
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    const formatNumber = number => number.toString().padStart(2, '0')

    const timeLeft = date - currentDate
    const days = formatNumber(Math.floor(timeLeft / (1000 * 60 * 60 * 24)))
    const hours = formatNumber(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    const minutes = formatNumber(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)))
    const seconds = formatNumber(Math.floor((timeLeft % (1000 * 60)) / 1000))

    const timeTypes = [days, hours, minutes, seconds]

    return (
        <Container>
            {timeTypes.map((timePiece, i) =>
                <SquareWithText>
                    <NumberSquare value={timePiece}></NumberSquare>
                    {
                        i === 0 ? 'DIAS'
                            : i === 1 ? 'HORAS'
                                : i === 2 ? 'MINUTOS'
                                    : 'SEGUNDOS'
                    }
                </SquareWithText>
            )}
        </Container>
    )
}