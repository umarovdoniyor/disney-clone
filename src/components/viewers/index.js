import { Container, Wrap } from './viewers-styles';

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src='/images/viewers-disney.png' alt='Viewers-1' />
      </Wrap>
      <Wrap>
        <img src='/images/viewers-marvel.png' alt='Viewers-2' />
      </Wrap>
      <Wrap>
        <img src='/images/viewers-national.png' alt='Viewers-3' />
      </Wrap>
      <Wrap>
        <img src='/images/viewers-pixar.png' alt='Viewers-4' />
      </Wrap>
      <Wrap>
        <img src='/images/viewers-starwars.png' alt='Viewers-5' />
      </Wrap>
    </Container>
  );
}

export default Viewers;
