import styled from 'styled-components';
import BaseSection from '/styles/BaseSection';
import Icon from '/components/Icon'
import Title from '/components/Title';

const Container = styled(BaseSection)`
display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ExpertIcon = styled(Icon)`

width: 40%;
  img{
    border: 1px solid rgba(0, 0, 250, 0.7);
    border-radius: 50%;
    box-shadow: 0 0 30px rgba(0, 0, 250, 0.7);
  }
`

export const ExpertDescription = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  font-size: max(15px, 1.2vw);
  text-align: justify;

    justify-items: left;

  @media (max-width: 800px) {
    margin-top: 5%;
    width: 100%;

  }
`

export const ExpertName = styled(Title)`

  h2{
    margin-top: 0;
  }

  @media (max-width: 800px) {
  text-align: center;
  }
`

export default Container;