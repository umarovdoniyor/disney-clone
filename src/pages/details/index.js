import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import db from '../../lib/firebase';
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
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    db.collection('movies')
      .doc(id)
      .get()
      .then((doc) => {
        console.log('doc', doc);
        // if(doc.exists){
        //   setMovie(doc.data());
        // }
        doc.exists ? setMovie(doc.data()) : console.log('No movie');
      });
  }, [id]);

  return (
    <Container>
      <Background>
        {/* <img src='/images/raya-bg.jpeg' alt='raya background ' /> */}
        <img src={movie?.Images[1]} alt='Background' />
      </Background>
      <ImageTitle>
        {/* <img
          src='/images/Raya_and_the_Last_Dragon_logo.png'
          alt='Raya_and_the_Last_Dragon_logo'
        /> */}
        <h1>{movie?.Title}</h1>
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
      <Subtitle>{movie?.Genre}</Subtitle>
      <Description>{movie?.Plot}</Description>
    </Container>
  );
}

export default Details;
