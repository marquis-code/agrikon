import React from 'react';
import agrikonCow from '../images/agrikonCow.png';
import agrikonFlowers from '../images/agrikonFlowers.png';
import agrikonGrassesFarm from '../images/agrikonGrassesFarm.png';
import agrikonOrange from '../images/agrikonOrange.png'; 
import agrikonGreen from '../images/agrikonGreen.png'; 
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: agrikonCow,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: agrikonFlowers,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: agrikonGreen,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  },
  {
    src: agrikonOrange,
    altText: 'Slide 4',
    caption: 'Slide 4',
    header: 'Slide 4 Header',
    key: '4'
  },
  {
    src: agrikonGrassesFarm,
    altText: 'Slide 5',
    caption: 'Slide 5',
    header: 'Slide 5 Header',
    key: '5'
  }
];

const Carousel = () => <UncontrolledCarousel className="carouselEdit" items={items} />;

export default Carousel;