import styled from "styled-components"

const Container = styled.section`
    padding: 5% 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: max(14px, 1.4vw);

    @media (max-width: 800px) {
        padding: 5% 10px;
    }

    p{
        padding-bottom: 2%;
    }
`

export default Container
