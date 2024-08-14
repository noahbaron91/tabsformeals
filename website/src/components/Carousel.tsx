import image1 from '../images/image-1.png';
import image2 from '../images/image-2.jpg';
import image3 from '../images/image-3.jpg';
import image4 from '../images/image-4.jpg';
import image5 from '../images/image-5.jpg';
import image6 from '../images/image-6.jpg';
import image7 from '../images/image-7.jpg';
import image8 from '../images/image-8.jpg';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Carousel() {
  return (
    <Splide
      options={{
        rewind: true,
        autoplay: true,
        perPage: 3,
        type: 'loop',
        arrows: false,
        pagination: false,
        gap: '1.5rem',
        breakpoints: {
          850: {
            perPage: 2,
            gap: '0.5rem',
          },
          500: {
            perPage: 1,
          },
        },
      }}
      aria-label='React Splide Example'
    >
      <SplideSlide>
        <img src={image1.src} />
      </SplideSlide>
      <SplideSlide>
        <img src={image2.src} />
      </SplideSlide>
      <SplideSlide>
        <img src={image3.src} />
      </SplideSlide>
      <SplideSlide>
        <img src={image4.src} />
      </SplideSlide>
      <SplideSlide>
        <img src={image5.src} />
      </SplideSlide>
      <SplideSlide>
        <img src={image6.src} />
      </SplideSlide>
      <SplideSlide>
        <img src={image7.src} />
      </SplideSlide>
      <SplideSlide>
        <img src={image8.src} />
      </SplideSlide>
    </Splide>
  );
}

export { Carousel };
