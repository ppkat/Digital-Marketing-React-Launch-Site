import styled from "styled-components";
import BaseSection from "/styles/BaseSection";

const Container = styled(BaseSection)`
    margin-top: 0;
    max-height: 120vh;

    h2{
        margin-top: 0
    }

    iframe{
        margin-top: 5vw;
        width: 64vw;
        height: 36vw;

        @media (max-widht: 800px) {
            width: 36vw;
            height: 64vw;
        }
    }

    button{
        margin-top: 3vw;
    }
`

export default Container