import NavLink from './NaviLink';
import { Container } from './styles';


 function Header() {
  return (
    <Container>
     <ul>
      <NavLink title='Home' path='/' />
      <NavLink title='Projects' path='/projetos' includes />
     </ul>
    </Container>
  );
}

export default Header;
