import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';


export function FormContato() {
  return (
    <Container>
    <SectionTitle 
    title={
      <>
      Vamos 
      <br />
      conversar ?
      </>
    } 

    description={
      <>
      Preenche o formulário que
      <br />
      irei Retornar em breve
      </>
    } />

    <Form />

    </Container>
  );
}

export default FormContato;
