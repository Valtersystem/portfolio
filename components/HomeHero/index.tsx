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
            <span className='comment'>//My presentation</span>
            <span className='purple'>Infos</span> {'\u007B'}
            <div>
              Age: <span className='blue'>28 years,</span>
            </div>
            <div>
            Nationality: <span className='blue'>Brazil</span>
            </div>
            <div>
            Live: <span className='blue'>Portugal</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos='zoom-in'>
            <span className='purple'>Others</span> {'\u007B'}
            <div>
            Student: <span className='blue'>Web - Front-end,</span>
            </div>
            <div>
            Focus: <span className='blue'>Front end engineering</span> 
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
