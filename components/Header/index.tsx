import NavLink from './NaviLink';
import { Container } from './styles';


 function Header() {
  return (
    <Container>
     <ul>
      <NavLink title='Home' path='/' />
      <NavLink title='Projects' path='/projetos' includes />
      <NavLink title='Blog' path='https://blog-dev-system.up.railway.app/'/>
     </ul>
    </Container>
  );
}

export default Header;
