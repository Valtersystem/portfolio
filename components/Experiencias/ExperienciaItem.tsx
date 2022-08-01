import { ReactNode } from 'react';
import {ItemContainer} from './styles';
import * as ReactDOM from 'react-dom';

interface ExperienciaProps{
  year: string;
  title: string;
  description?: string | ReactNode;
}

export default function ExperienciaITEM({year, title, description}: ExperienciaProps) {
  return(
    <ItemContainer data-aos='fade-up'>
    <div>
      <h1>{year}</h1>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    </ ItemContainer>

  )
}