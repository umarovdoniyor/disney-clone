import { Container, Content, Wrap } from './movies-styles';

import { selectMovies } from '../../features/movie/movieSlice';
import { useSelector } from 'react-redux';

function Movies() {
  const movies = useSelector(selectMovies);
  console.log('movies', movies);

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <img src={movie.Images[0]} alt='Movie' />
            </Wrap>
          ))}
      </Content>
    </Container>
  );
}

export default Movies;
