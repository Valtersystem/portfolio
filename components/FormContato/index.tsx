import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';


export function FormContato() {
  return (
    <Container>
    <SectionTitle 
    title={
      <>
      Let's Talk ?
      </>
    } 

    description={
      <>
      Fill out the form that
      <br />
      will get back to you soon.
      </>
    } />

    <Form />

    </Container>
  );
}

export default FormContato;
