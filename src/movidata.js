

import { Link } from "react-router-dom";
import dra from "./dra.jpg";

import dragon from "./dragon.jpg";

import epic from "./epic.jpg";

import snowwhite from "./snowwhite.jpg";
import spider from "./spider.jpg";
import tangled from "./tangled.jpg";


const movies = [
    {
      id: 1,
      title: 'Inception',
      image: dra,
      rating: 8.8,
      genre: 'Action, Adventure, Sci-Fi',
      link:'https://www.youtube.com/embed/fBFgg_OYcR4?si=svC0ccGjw6LYdX19'
    },
    {
      id: 2,
      title: 'The Dragon',
      image: dragon,
      rating: 9.0,
      genre: 'Action, Crime, Drama',
      link:'https://www.youtube.com/embed/VCpKOLuOTPI?si=6JgCiUYEx-HEgrUI'
    },
    {
      id: 3,
      title: 'The Epic',
      image: epic,
      rating: 8.6,
      genre: 'Adventure, Drama, Sci-Fi',
      link:'https://www.youtube.com/embed/piCKO2mLql4?si=1BXkVLMYrPwOLsgm'
    },
    {
      id: 4,
      title: 'The Snowwhite',
      image: snowwhite,
      rating: 8.7,
      genre: 'Action, Sci-Fi',
      link:'https://www.youtube.com/embed/piCKO2mLql4?si=1BXkVLMYrPwOLsgm'

    },
    {
      id: 5,
      title: 'The Tangled',
      image: tangled,
      rating: 9.3,
      genre: 'Drama',
      link:'https://www.youtube.com/embed/piCKO2mLql4?si=1BXkVLMYrPwOLsgm'

    },
   
  ];
  
  export default movies;
  