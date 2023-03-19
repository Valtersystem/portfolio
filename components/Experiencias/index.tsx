import { EventEmitter } from 'stream';
import SectionTitle from '../SectionTitle';
import ExperienciaItem   from './ExperienciaItem';
import { Container } from './styles';



export function Experiencias() {

  

  return (
    <Container>
     <SectionTitle title='#EXPERIENCES' description='' />

     <section>
     <ExperienciaItem 
        year='Current Job'
        title='Web developer'
        description= {<span>My mission is to meet all the demands requested by the client, demands with implementation of new products, creation of new templates, layout updates, and newsletter creation.<br />
        <>
        -Creation of new pages and new templates. <br />
        -Maintenance and bug fixing <br />
        -New product submissions <br />
        -Newsletter creation <br />
        -Wordpress blog maintenance <br />
        Technologies: <br />      
        Php, Laravel, Html, Css, Javascript, Bootstrap, Jquery, Mysql(phpmyadmin) and Wordpress.
        </>
         </span>}
        />
        <ExperienciaItem 
        year='2021'
        title='Web management'
        description="I was responsible for the hospital's events website where I inserted new event content, reported bugs in the website in general, provided customer support such as email exchange, payment management, and also participated in meetings for future website updates."
        />
        <ExperienciaItem
        year='2022'
        title='Dev Front-end Junior'
        description= {<span>With this experience I learned to work with Vuejs, Bootstrap, CSS, HTML, PHP, FIGMA and GIT <br />
        <>
        -I have created several landing pages and email marketing from scratch.<br />
        -I added a contact form to a web-site that was already in production.<br />
        -I assisted in the technology switch from knockout js to VueJs for an e-commerce website.<br />
        -Created simple template in Bootstrap and VueJS<br />
        </>
         </span>}
        />
        
     </section>
    </Container>
  );
}

export default Experiencias;
