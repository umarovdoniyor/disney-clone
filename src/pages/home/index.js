import { Container } from './home-styles';
import ImgSlider from '../../components/imgSlider';
import Viewers from '../../components/viewers';

function Home() {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
    </Container>
  );
}

export default Home;
