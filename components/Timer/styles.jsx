import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

export const SquareWithText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: max(8px, 0.8vw);

    margin-left: 15px;

    @media (max-width: 800px) {
        margin-left: 5px;
    }
`