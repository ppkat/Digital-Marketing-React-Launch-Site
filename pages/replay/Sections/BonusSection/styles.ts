import styled from "styled-components";
import Icon from "/components/Icon";
import Title from "/components/Title";
import BaseSection from "/styles/BaseSection";

const Container = styled(BaseSection)`
    
`

export const BonusLine = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 800px){
        flex-direction: column;
        align-items: center;
    }
`

export const BonusTitle = styled(Title)`
    @media (max-width: 800px){
        text-align: center;
    }
`

export const BonusText = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    font-size: max(15px, 1.2vw);
    text-align: justify;

    @media (max-width: 800px){
        width: 100%;
    }
`

export const GiftIcon = styled(Icon)`
    @media (max-width: 800px){
        width: 50%;
    }
`

export const GuaranteeIcon = styled(Icon)`
    margin-top: 10%;
    margin-bottom: 5%;
    width: 40%;

    @media (max-width: 800px) {
        max-width: min(50%, 280px);
    }
`

export default Container