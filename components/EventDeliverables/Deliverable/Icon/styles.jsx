import styled from "styled-components"

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 20%;
    margin-right: 10px;
    
    img {
        border-radius: 100%;
    }

    @media (max-width: 800px) {
        max-width: min(20%, 50px);
    }
`