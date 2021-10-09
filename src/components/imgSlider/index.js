import { Carousel, Wrap } from './imgslider-styles';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src='/images/slider-badging.jpg' alt='slider-image-1' />
      </Wrap>
      <Wrap>
        <img src='/images/slider-badag.jpg' alt='slider-image-2' />
      </Wrap>
      <Wrap>
        <img src='/images/slider-scale.jpg' alt='slider-image-3' />
      </Wrap>
      <Wrap>
        <img src='/images/slider-scales.jpg' alt='slider-image-4' />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;
