import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100px;
    padding: 3% 15%;
    text-align: center;
    @media (max-width: 800px) {
        padding: 2% 10px;
    }

    p {
        font-size: max(16px, 1.8vw);
        margin-top: 5%;
        margin-bottom: 6%;
        @media (max-width: 800px) {
            text-align: justify;
        }
    }
`