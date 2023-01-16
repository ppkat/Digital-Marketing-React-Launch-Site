import { Container } from './styles'
import CTAButton from '/components/CTAButton'
import { useContext } from 'react'
import InputContext from '/Contexts/InputContext'

export default function CTAButtonSession() {

    const inputRef = useContext(InputContext)

    function handleClick() {
        scroll({ top: 0, behavior: 'smooth' })
        if (inputRef.current) inputRef.current.focus()
    }

    return (
        <Container>
            <CTAButton onClick={handleClick}>Quero me inscrever agora</CTAButton>
        </Container>
    )
}