// import Icons (react-icons)
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai';
//

import { Container } from './styles';

function Footer(){

  function handleRedirect(url:string){
    window.open(url);
  }

  function hendleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  return (
    <Container>
     <div className="container">
      <button type='button' onClick={hendleScrollTop}>Voltar ao topo</button>
      <section>
        <AiOutlineTwitter onClick={() => handleRedirect("https://twitter.com")}/>
        <AiOutlineGithub onClick={() => handleRedirect("https://github.com")}/>
        <AiFillLinkedin onClick={() => handleRedirect("https://linkdin.com")}/>
      </section>
     </div>
    </Container>
  );
}

export default Footer;
