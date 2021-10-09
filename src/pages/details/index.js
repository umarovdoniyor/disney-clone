import {
  Container,
  Background,
  ImageTitle,
  Controls,
  Play,
  Trailer,
  Add,
  GroupWatch,
  Subtitle,
  Description,
} from './details-styles';

function Details() {
  return (
    <Container>
      <Background>
        <img src='/images/raya-bg.jpeg' alt='raya background ' />
      </Background>
      <ImageTitle>
        <img
          src='/images/Raya_and_the_Last_Dragon_logo.png'
          alt='Raya_and_the_Last_Dragon_logo'
        />
      </ImageTitle>
      <Controls>
        <Play>
          <img src='/images/play-icon-black.png' alt='play icon' />
          <span>Play</span>
        </Play>
        <Trailer>
          <img src='/images/play-icon-white.png' alt='play icon' />
          <span>Trailer</span>
        </Trailer>
        <Add>
          <span>+</span>
        </Add>
        <GroupWatch>
          <img src='/images/group-icon.png' alt='group icon' />
        </GroupWatch>
      </Controls>
      <Subtitle>2021 * 107m * Animation, Action, Adventure</Subtitle>
      <Description>
        In a realm known as Kumandra, a re-imagined Earth inhabited by an
        ancient civilization, a warrior named Raya is determined to find the
        last dragon.
      </Description>
    </Container>
  );
}

export default Details;
