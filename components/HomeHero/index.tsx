import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/pessoa2.png'



function HomeHero() {
  return (
    <Container data-aos='fade-up'>
      <img src={picture} alt="Minha Foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Valter</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos='zoom-in'>
            <span className='comment'>//Minha apresentação</span>
            <span className='purple'>Infos</span> {'\u007B'}
            <div>
              Nome: <span className='blue'>Valter,</span>
            </div>
            <div>
              Sobrenome: <span className='blue'>Santos</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos='zoom-in'>
            <span className='purple'>Cargo</span> {'\u007B'}
            <div>
              Função: <span className='blue'>Dev Front-end,</span>
            </div>
            <div>
              Empresa: <span className='blue'>Barretos SP</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;