import styled from "styled-components";
import Icon from "/components/Icon";
import BaseSection from "/styles/BaseSection";

const Container = styled(BaseSection)`
    
`

export const BonusLine = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 800px){
        
    }
`

export const BonusText = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 50%;
    font-size: max(15px, 1.2vw);
    text-align: justify;
`

export const GuaranteeIcon = styled(Icon)`
    margin-top: 100px;
    width: 40%;

    @media (max-width: 800px) {
        max-width: min(50%, 280px);
    }
`

export default Container