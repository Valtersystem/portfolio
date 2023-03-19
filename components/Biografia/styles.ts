import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  > section {
    width: 100%;
    margin-top: 3rem;
    display: flex;
    gap: 1.5rem;

    padding-bottom: 3rem;
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
    /* background: ${({ theme }) => theme.gradient}; */
    padding: 1rem;
    padding-top: 2.5rem;
    height: 13rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    transition: 0.5s;

    p {
      color: ${({ theme }) => theme.textLight};
      font-size: 1.5rem;
      font-weight: 300;
      text-align: justify;
    }
  }

  &:hover > div {
    filter: brightness(1.2);
    transform: translateY(-28px);
  }

  &:nth-child(even) > div {
    margin-top: 4rem;
  }

  @media (max-width: 1000px) {
    > div {
      height: auto;
      padding-top: 1.5rem;

      p {
        font-size: 1.5rem;
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
      max-width: 100%;

      p {
        font-size: 1rem;
      }
    }
  }
`;
