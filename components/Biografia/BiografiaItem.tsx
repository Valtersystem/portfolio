import {ItemContainer} from './styles';

interface BiagrafiaProps{
  description: string;
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