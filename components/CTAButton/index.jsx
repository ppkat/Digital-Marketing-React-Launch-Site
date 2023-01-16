import { Container, StyledButton } from './styles'
import Link from 'next/link'

function CTAButton({ children, href, buttWidth, ...props }) {

    const Tag = href ? Link : 'div'
    buttWidth = buttWidth ?? 80
    return (
        <Container buttWidth={buttWidth}>
            {
                href ?
                    <Tag href={href}>
                        <StyledButton {...props}>{children}</StyledButton>
                    </Tag>
                    :
                    <Tag>
                        <StyledButton {...props}>{children}</StyledButton>
                    </Tag>
            }
        </Container>
    )
}

export default CTAButton
