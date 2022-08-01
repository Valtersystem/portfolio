import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/pessoa2.png'



function HomeHero() {
  return (
    <Container data-aos='fade-up'>
      <img src='/pessoa1.png' alt="Minha Foto" />
      <div>
        <TextContainer>
          <h1>Web developer</h1>
          <h2>Valter Santos</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos='zoom-in'>
            <span className='comment'>//Minha apresentação</span>
            <span className='purple'>Infos</span> {'\u007B'}
            <div>
              Idade: <span className='blue'>26 anos,</span>
            </div>
            <div>
            Nacionalidade: <span className='blue'>Brasil</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos='zoom-in'>
            <span className='purple'>Others</span> {'\u007B'}
            <div>
              Estudante: <span className='blue'>Dev Front-end Junior,</span>
            </div>
            <div>
               Foco: <span className='blue'>Front end engineering</span> 
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;