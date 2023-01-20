import styled from "styled-components";
import BaseSection from "/styles/BaseSection";

export const Container = styled(BaseSection)`
    margin-top: 10%;
    padding: 0 15%;

    @media (max-width: 800px) {
        padding: 0 10px;
    }

    p{
        font-size: max(16px, 1.3vw);
    }
`

export const Title = styled.h2`
    text-align: center;
    font-size: max(25px, 3.0vw);
`

export const DeliverablesRow = styled.div`
    display: flex;
    flex-direction: row;
    height: 50%;

    @media (max-width: 800px) {
        flex-direction: column;
        justify-content: space-evenly;
    }
`

export const DeliverablesCollum = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 40vh;

    @media (max-width: 800px) {
        height: 90vh;
    }
`