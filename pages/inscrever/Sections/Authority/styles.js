import styled from 'styled-components'
import BaseSection from '/styles/BaseSection.jsx'

const Container = styled(BaseSection)`
    text-align: justify;
    font-size: max(25px, 2.2vw);
    background-image: url('/images/banner_jp.png');
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-size: cover;

    p{
        font-size: max(25px, 1.8vw);
        color: white;
    }

    @media (max-width: 1200px) {
        background-image: url('/images/background_medium.png');
    }
    
    @media (max-width: 550px) {
        background-image: url('/images/background_small.png');
    }
`
export default Container