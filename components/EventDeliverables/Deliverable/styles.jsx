import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 50%;

    p{
        padding-left: 10%;
        text-align: justify;
    }
    
    @media (max-width: 800px) {
        max-width: 100%;

        p{
            padding-left: 10px;
        }
    }
`
export const TitleWithImage = styled.div`
    display: flex;
    color: #3783f5d6;

    h2 {
        padding: 3%;
        font-size: max(20px, 2vw)
    }
`