import styled from '@emotion/styled';
import {useEffect, useState} from 'react';
import Frase from './components/Frase';

const Contenedor = styled.div `
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button `
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: 'Arial';
  color: #FFF;
  margin-top: 3rem;
  padding: 1rem 3rem; // 1rem; y, 3rem; x
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  &:hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

    const [frase, setFrase] = useState({});

    const consultarAPI = async () => {
        const url = 'http://breaking-bad-quotes.herokuapp.com/v1/quotes';

        const api = await fetch(url);
        const frase = await api.json();
        setFrase(frase[0]);
    }

    useEffect(() => {
      consultarAPI();
    }, []);

    return (
        <Contenedor>
            <Frase frase={frase}/>
            <Boton type="button"
                onClick={
                    () => consultarAPI()
            }>Obtener frase</Boton>
        </Contenedor>
    );
}

export default App;
