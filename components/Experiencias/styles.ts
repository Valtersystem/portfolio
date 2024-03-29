import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  > section {
    width: 100%;
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    padding-bottom: 2rem;
    border-bottom: 3px solid ${({ theme }) => theme.primary};

    @media (max-width: 1000px) {
      gap: 1rem;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      margin-top: 5rem;
      gap: 2rem;
    }
  }
`;

export const ItemContainer = styled.div`
  > div {
    /* background: ${({ theme }) => theme.gradientBlack}; */
    padding: 1rem;
    padding-top: 2.5rem;
    /* height: 20rem; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    /* max-width: 19rem; */

    transition: 0.5s;

    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    h2 {
      color: ${({ theme }) => theme.secondary};
      font-size: 1.5rem;
      font-weight: 300;
      margin-bottom: 1rem;
    }

    p {
      color: ${({ theme }) => theme.textLight};
      font-size: 1rem;
      margin-bottom: 1.5rem;
      font-weight: 300;
    
      > span {
        line-height: 2.2;
      }
    }
  }

  &:hover > div {
    filter: brightness(1.2);
    transform: translateY(-10px);
  }

  /* &:nth-child(even) > div {
    margin-top: 4rem;
  } */

  @media (max-width: 1000px) {
    > div {
      height: 15rem;
      padding-top: 1.5rem;

      h1 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      h2 {
        font-size: 1rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 700px) {
    &:nth-child(even) > div {
      margin-top: 0rem;
    }
    &:hover > div {
      transform: translate(0);
    }

    > div {
      height: auto;
      padding: 0rem;
      text-align: justify;
      max-width: 100%;

      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;
