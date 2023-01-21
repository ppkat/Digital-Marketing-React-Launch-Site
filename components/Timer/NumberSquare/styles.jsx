import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const SquareDiv = styled.div`
    background-color: #3577f1;
    text-align: center;
    vertical-align: middle;
    line-height: max(45px, 4.5vw); 
    min-width: max(40px, 4vw);
    min-height: max(45px, 4.5vw);
    border-radius: 10%;
    font-size: max(18px, 2.2vw);
    font-weight: bold;
    margin-left: 15px;

    @media (max-width: 800px) {
        margin-left: 5px;
    }
`