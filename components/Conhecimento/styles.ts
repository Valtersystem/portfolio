import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;

    > section{
        margin-top: 8rem;
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 8rem;
        flex-wrap: wrap;

        @media (max-width: 1000px){
            gap: 5rem;
        }

        @media (max-width: 700px){
            gap: 3rem;
            flex-wrap: wrap;
            margin-top: 5rem;
        }
    }
`;
export const ConhecimentoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
    justify-content: center;

    p {
        color: ${({ theme }) => theme.secondary};
        font-weight: 600;
        font-size: 1.3rem;
        text-transform: uppercase;
    }

    &:hover {
        span {
       
        opacity: 1;
        transition: 0.3s;
        
    }
    }


    svg{
        width: 6.5rem;
        height: 6.5rem;
        color: ${({ theme }) => theme.textHighlight};
        transition: 0.5s;
    }

    &:hover {
        svg {
            color: ${({ theme }) => theme.primary};
            transform: scale(0.95);
        }
    }

    span {
        text-transform: uppercase;
        color: ${({ theme }) => theme.secondary};
        font-weight: 600;
        font-size: 1.3rem;
        transition: all 0.5s;
        opacity: 0;
    }

   

    @media(max-width: 1000px){
        
        p {
            font-size: 1rem;
        }

        svg {
            width: 5rem;
            height: 5rem;
        }

    }

`;
