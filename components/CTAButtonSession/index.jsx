import { Container } from './styles'
import CTAButton from '../../styles/CTAButton'
import React, { useEffect, useLayoutEffect } from 'react'

export default function CTAButtonSession() {

    function handleClick() {
        scroll({ top: 0, behavior: 'smooth' })
    }

    return (
        <Container>
            <CTAButton onClick={handleClick}>Quero me inscrever agora</CTAButton>
        </Container>
    )
}