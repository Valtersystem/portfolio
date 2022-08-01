import { ReactNode } from 'react';
import { ConhecimentoContainer } from './styles';



interface ConhecimentoProps {
    title: string;
    icon: ReactNode;
    nivel: string;
}

export default function ConhecimentoItem({title, icon, nivel}: ConhecimentoProps) {
  return( 
  <ConhecimentoContainer data-aos='fade-up'>
    <p>{title}</p>
    {icon}
    <span>{nivel}</span>
  </ConhecimentoContainer>
  );
}

