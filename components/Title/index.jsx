import Container from "./styles";

export default function Title({ tag = 'h1', color = 'white', align = 'center', children }) {

    const hNum = Number(tag.slice(-1)) // the last number of "h" tags
    const fontSize = () => {
        let fontVw = 2.6
        let fontPx = 18
        for (let i = hNum; i > 1; i--) {
            fontVw -= 0.45
        }
        return { relative: String(fontVw) + 'vw', min: String(fontPx) + 'px' }
    }

    const Tag = tag
    return (
        <Container color={color} align={align} fontSizeRelative={fontSize().relative} fontSizeMin={fontSize().min}>
            <Tag>{children}</Tag>
        </Container>
    )
}