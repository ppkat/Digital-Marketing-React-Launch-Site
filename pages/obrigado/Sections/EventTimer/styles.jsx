import styled from "styled-components";
import BaseSection from "/styles/BaseSection";

export const Container = styled(BaseSection)`
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
`

export const EventNameContainer = styled.div`
    padding-left: 5%;
    font-size: max(22px, 2.3vw);
    text-align: center;
    max-width: 40%;

    @media (max-width: 800px) {
    }
`