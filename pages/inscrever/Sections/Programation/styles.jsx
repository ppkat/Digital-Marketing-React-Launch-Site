import styled from "styled-components";

export const Container = styled.section`
    margin-top: 10vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 15%;

    @media (max-width: 800px) {
        padding: 0 10px;
        flex-direction: column;
        align-items: center;
    }
`
export const EventDescription = styled.div`
    margin-left: 10vw;

    p {
        font-size: max(16px, 1.3vw);
        text-align: justify;
    }
    
    @media (max-width: 800px) {
        margin-left: 0;
        margin-top: 5vh;

        h2 {
            text-align: center;
        }
    }
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 40%;
    
    img {
        border-radius: 100%;
    }

    @media (max-width: 800px) {
        max-width: min(50%, 280px);
    }
`