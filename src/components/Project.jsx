import { Link, useLocation } from "react-router-dom";

import fitfolio from "../assets/images";
import vibrant from "../assets/images";
import quiz from "../assets/images";
import generator from "../assets/images";
import weather from "../assets/images";
import portfolio from "../assets/images";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const projectData = [
  {
    name: 'FitFolio',
    imgSrc: fitfolio,
    description: 'fitness tracker',
    url: 'https://fitfolio-acfec075c4c6.herokuapp.com/login',
    github: 'https://github.com/Omar-Razo/FitFolio'
  },
  {
    name: 'Vibrant Vocabs',
    imgSrc: vibrantvocab,
    description: 'a colorful dictionary with vibrant images',
    url: 'https://kthao21.github.io/Vibrant_Vocab/',
    github: 'https://github.com/kthao21/Vibrant_Vocab'
  },
  {
    name: 'JavaScript Quiz',
    imgSrc: quiz,
    description: 'a quiz that tests your javascript knowledge',
    url: 'https://nicolasbel3005.github.io/javaquiz/',
    github: 'https://github.com/nicolasbel3005/javaquiz'
  },
  {
    name: 'Password Generator',
    imgSrc: generator,
    description: 'A random password generator',
    url: 'https://nicolasbel3005.github.io/password-generator/',
    github: 'https://github.com/nicolasbel3005/password-generator'
  },
  {
    name: 'Weather App',
    imgSrc: weather,
    description: 'A weather application that gives you a 5 day forecast of any city',
    url: 'https://nicolasbel3005.github.io/weather/',
    github: 'https://github.com/nicolasbel3005/weather'
  },
  {
    name: 'Landing Page',
    imgSrc: landing,
    description: 'first portfolio page',
    url: 'https://nicolasbel3005.github.io/personal-portfolio/',
    github: 'https://github.com/nicolasbel3005/personal-portfolio'
  },
];

const Project = () => {
  return (
    <div>
    {projectData.map((project) => (
    <Card className='card' style={{ width: '25rem' }}>
      <Card.Img variant="top" img src={project.imgSrc} />
      <Card.Body>
        <Card.Title className='title'>{project.name}</Card.Title>
        <Card.Text>
          {project.description}
        </Card.Text>
        <a href={project.url}>
        <Button className='my-buttons' variant="primary">Website</Button>
        </a>
        <a href={project.github}>
        <Button className='my-buttons' variant="primary">GitHub</Button>
        </a>
      </Card.Body>
    </Card>
       ))}
    </div>
  );
};

export default Project;