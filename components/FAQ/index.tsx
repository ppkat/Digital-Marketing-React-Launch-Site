import Container, { StyledSummary } from './styles'

export interface Question {
    question: string
    answer: string
}

export type Content = Question[]

export interface FAQProps {
    content: Content
}

export default function FAQ({ content }: FAQProps) {


    return (
        <Container>
            {content.map((item, i) => (
                <details key={i}>
                    <StyledSummary>{item.question}</StyledSummary>
                    {item.answer}
                </details>
            ))}
        </Container>
    )
}