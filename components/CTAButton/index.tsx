import { Container, StyledButton } from './styles'
import Link from 'next/link'

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    href?: string,
    buttWidth?: number,
}

function CTAButton({ children, href, buttWidth = 80, ...props }: CTAButtonProps) {

    return (
        <Container buttWidth={buttWidth}>
            {
                href ?
                    <Link href={href}>
                        <StyledButton {...props}>{children}</StyledButton>
                    </Link>
                    :
                    <div>
                        <StyledButton {...props}>{children}</StyledButton>
                    </div>
            }
        </Container>
    )
}

export default CTAButton
