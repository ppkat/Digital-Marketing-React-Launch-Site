import styled from "styled-components";

export const Container = styled.div`
    padding: 0;
    margin: 0;
    width: ${props => props.buttWidth}%;
`;

export const StyledButton = styled.button`
    min-width: 100%;
    background-color: #1445da;
    height: 80px;
    border-radius: 20px;
    border: none;
    font-size: 2.4vw;
    
    :hover {
        background-color: #1157ec;
        cursor: pointer;
    }

    @media (max-width : 800px) {
        text-align: center;
        font-size: 4.5vw;
    }
`