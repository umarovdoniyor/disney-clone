import { Container } from './home-styles';
import ImgSlider from '../../components/imgSlider';
import Viewers from '../../components/viewers';
import Movies from '../../components/movies';

function Home() {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;
