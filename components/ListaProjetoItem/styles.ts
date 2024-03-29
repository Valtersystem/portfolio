import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`

  
  

  > a {
    position: relative;
    width: 100%;
    background: url(${ props => props.imgUrl}) no-repeat;
    background-size: cover;
    height: 10rem;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.border};
    transition: 0.5s;
    cursor: pointer;
    overflow: hidden;

    border-radius: 1rem;
    
    box-shadow: ${({ theme }) => theme.secondary} -0.05px 0.95px 2.6px;
    
    &:hover {
      box-shadow: ${({ theme }) => theme.primary} 1.95px 1.95px 2.6px;
      h1 {
        color: ${({ theme }) => theme.primary};
        font-size: 1.5rem;
      }
      > div.overlay {
        opacity: 0.5;
      }
    
    }

    > section {
      z-index: 2;
      h1 {
        color: ${({ theme }) => theme.secondary};
        font-size: 1.5rem;
      }
      h2 {
        color: ${({ theme }) => theme.primary};
        font-weight: 300;
        font-size: 1rem;
      }    

    }
    
    > div.overlay {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: black;
      opacity: 0.7;
      transition: 0.5s;
    }
  }
`;
