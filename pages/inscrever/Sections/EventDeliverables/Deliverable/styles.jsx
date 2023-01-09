import styled from "styled-components";
import Title from '/components/Title'

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
export const StyledTitle = styled(Title)`
    padding: 3%;
`

export const TitleWithImage = styled.div`
    display: flex;
`