import {ItemContainer} from './styles';
import { ReactNode } from 'react';

interface BiagrafiaProps{
  description?: string | ReactNode;
}

export default function ExperienciaITEM({description}: BiagrafiaProps) {
  return(
    <ItemContainer data-aos='fade-up'>
    <div>
      <p>{description}</p>
    </div>
    </ ItemContainer>

  )
}