import styled from 'styled-components'
import BaseSection from '/styles/BaseSection'

export const Container = styled(BaseSection)`
    margin-top: 5%;
    padding: 0;

    @media (max-width: 800px){
        padding: 0;
    }

    button {
        width: 80%;
    }
`