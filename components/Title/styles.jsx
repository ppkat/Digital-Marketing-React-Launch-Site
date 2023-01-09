import styled from "styled-components"

const Container = styled.div`
    font-size: max(${props => props.fontSizeMin}, ${props => props.fontSizeRelative});
    color: ${props => props.color};
    text-align: ${props => props.align};
`

export default Container