import SectionTitle from '../SectionTitle';
import { Container } from './styles';
import ConhecimentoItem from './ConhecimentoItem';

//Import Icons from React Icons
import { FaCss3Alt, FaReact ,FaSass ,FaVuejs, FaLaravel } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiStrapi, SiNextdotjs } from 'react-icons/si';





export function Conhecimento() {
  return (
    <Container>
      <SectionTitle title="#skills" />
      <section>
        <ConhecimentoItem title='HTML' icon={<AiFillHtml5 />} nivel="2 Year" />
        <ConhecimentoItem title='CSS' icon={<FaCss3Alt />} nivel="2 Year" />
        <ConhecimentoItem title='JAVASCRIPT' icon={<IoLogoJavascript />} nivel=" 1 Year" />
        <ConhecimentoItem title='REACT' icon={<FaReact/>} nivel="2 Months" />
        <ConhecimentoItem title='Sass' icon={<FaSass/>} nivel="2 Months" />
        <ConhecimentoItem title='Vuejs' icon={<FaVuejs/>} nivel="6 Months" />
        <ConhecimentoItem title='Vuejs' icon={<FaLaravel/>} nivel="3 Months" />
        {/* <ConhecimentoItem title='Strapi' icon={<SiStrapi/>} nivel="3 Meses" />
        <ConhecimentoItem title='NextJS' icon={<SiNextdotjs/>} nivel="1 Meses" /> */}
      </section>
    </Container>
  );
}

export default Conhecimento;
