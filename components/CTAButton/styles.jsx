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
    font-size: 1em;
    font-size: 40px;
    
    :hover {
        background-color: #1157ec;
        cursor: pointer;
    }

    @media (max-width : 800px) {
        text-align: center;
        font-size: max(0.8em, 30px);
    }
`