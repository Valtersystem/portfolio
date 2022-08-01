import SectionTitle from '../SectionTitle';
import { Container } from './styles';
import ConhecimentoItem from './ConhecimentoItem';

//Import Icons from React Icons
import { FaCss3Alt, FaReact ,FaSass ,FaVuejs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiStrapi, SiNextdotjs } from 'react-icons/si';





export function Conhecimento() {
  return (
    <Container>
      <SectionTitle title="#Conhecimento" />
      <section>
        <ConhecimentoItem title='HTML' icon={<AiFillHtml5 />} nivel="1 ano" />
        <ConhecimentoItem title='CSS' icon={<FaCss3Alt />} nivel="8 Meses" />
        <ConhecimentoItem title='JAVASCRIPT' icon={<IoLogoJavascript />} nivel=" 7 Meses" />
        <ConhecimentoItem title='REACT' icon={<FaReact/>} nivel="2 Meses" />
        <ConhecimentoItem title='Sass' icon={<FaSass/>} nivel="2 Meses" />
        <ConhecimentoItem title='Vuejs' icon={<FaVuejs/>} nivel="6 Meses" />
        {/* <ConhecimentoItem title='Strapi' icon={<SiStrapi/>} nivel="3 Meses" />
        <ConhecimentoItem title='NextJS' icon={<SiNextdotjs/>} nivel="1 Meses" /> */}
      </section>
    </Container>
  );
}

export default Conhecimento;
