import styled from "styled-components"

const BaseSection = styled.section`
    margin-top: 10%;
    padding: 3% 15%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 800px) {
        padding: 2% 10px;
    }
`

export default BaseSection