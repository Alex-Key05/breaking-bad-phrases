import styled from '@emotion/styled';

const DivFrase = styled.div`
    background-color: #FFF;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 3rem;
    border-radius: .5rem;
    max-width: 800px;
    margin-top: 8rem;

    @media (max-width:762px) {
        /* margin-top: 1rem; */
        margin-bottom: 10rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative; // Posiciona las comillas
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute; // Posiciona las comillas
            left: -1rem;
            top: -2rem;
        }
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.6rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }

`; 

const Frase = ({frase}) => {

    // Revisa si un objeto está vacío
    // if(Object.keys(frase).length === 0) return null;

    return (
        <DivFrase>
            <h1>{frase.quote}</h1>
            <p>--{frase.author}</p>
        </DivFrase>
       
    )
}

export default Frase;
