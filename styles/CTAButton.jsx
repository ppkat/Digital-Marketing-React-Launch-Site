import styled from "styled-components"

const CTAButton = styled.button`
    width: 80%;
    background-color: #1445da;
    height: 80px;
    border-radius: 20px;
    border: none;
    font-size: 1em;
    margin-top: 10px;
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

export default CTAButton