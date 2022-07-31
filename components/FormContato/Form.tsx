import { FormContainer, Input, TextArea } from './styles';
import { FormEvent, useState } from 'react';
import { sendContactMail } from '../../src/services/sendMail';
import toast from 'react-hot-toast';
import { backgrounds } from 'polished';
import theme from '../../src/styles/theme';

export default function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [loading, setLoad] = useState(false);

  async function hendleSubmit(event: FormEvent) {
    event.preventDefault();

    if (loading) return;

    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      toast('Preencha todos os campos para enviar sua mensagem!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      return;
    }

    try {
      setLoad(true);
      await sendContactMail(nome, email, mensagem);
      setNome('');
      setEmail('');
      setMensagem('');

      toast('Mensagem enviada com sucesso!', {
        style: {
          background: theme.secondary,
          color: '#fff'
        }
      });
    } catch (error) {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente Novemente!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
    } finally {
      setLoad(false);
    }

    await sendContactMail(nome, email, mensagem);
  }

  return (
    <FormContainer data-aos="fade-up" onSubmit={hendleSubmit}>
      <Input
        placeholder="Nome"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />

      <Input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />

      <TextArea
        placeholder="Mensagem"
        value={mensagem}
        onChange={({ target }) => setMensagem(target.value)}
      />

      <button type="submit" disabled={loading}>ENVIAR</button>
    </FormContainer>
  );
}
