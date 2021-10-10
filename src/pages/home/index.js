import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './home-styles';
import ImgSlider from '../../components/imgSlider';
import Viewers from '../../components/viewers';
import Movies from '../../components/movies';

import db from '../../lib/firebase';

import { setMovies } from '../../features/movie/movieSlice';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      // console.log('tempMovies', tempMovies);
      dispatch(setMovies(tempMovies));
    });
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;
