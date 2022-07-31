import SectionTitle from '../SectionTitle';
import { Container } from './styles';
import ConhecimentoItem from './ConhecimentoItem';

//Import Icons from React Icons
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { AiFillHtml5 } from 'react-icons/ai';




export function Conhecimento() {
  return (
    <Container>
      <SectionTitle title="#Conhecimento" />
      <section>
        <ConhecimentoItem title='HTML' icon={<AiFillHtml5 />} />
        <ConhecimentoItem title='CSS' icon={<FaCss3Alt />} />
        <ConhecimentoItem title='JAVASCRIPT' icon={<IoLogoJavascript />} />
        <ConhecimentoItem title='REACT' icon={<FaReact/>} />
      </section>
    </Container>
  );
}

export default Conhecimento;
