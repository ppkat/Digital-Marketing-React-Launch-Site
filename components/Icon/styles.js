import styled from "styled-components"

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: ${props => props.size ?? 20}%;
    margin-right: 10px;
    
    img {
        border-radius: 100%;
    }

    @media (max-width: 800px) {
        width: min(${props => props.size ?? 20}%, 50px);
    }
`