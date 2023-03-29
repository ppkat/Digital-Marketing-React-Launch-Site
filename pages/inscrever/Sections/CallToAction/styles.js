import styled from 'styled-components'
import BaseSection from '/styles/BaseSection'

const Container = styled(BaseSection)`
    margin-top: 0;
    min-width: 100px;
    text-align: center;

    p {
        font-size: max(16px, 1.8vw);
        margin-top: 5%;
        margin-bottom: 6%;
        @media (max-width: 800px) {
            text-align: justify;
        }
    }
`
export default Container