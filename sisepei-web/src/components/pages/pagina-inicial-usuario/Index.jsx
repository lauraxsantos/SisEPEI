import React from 'react';
import TopBar from '../../layout/topbar';
import './style.css';
import BotaoCadastrar from '../../layout/BotaoCadastrar';
import SearchBar from '../../layout/SearchBar';
import Card from '../../layout/InfoEditais';
import { useEffect, useState } from 'react';
import Axios from 'axios';


export function PaginaInicial(props) {
  const [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    console.log("Fetching cards...");
    Axios
    //inserir o link no get
      .get(``)
      .then((response) => {
        setCardsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <body id='page1'>

      <TopBar />
      <h1 className='welcome'>Bem vindo!</h1>
      <hr className='myhr' />
      <h1 className='editaiswelcome'>Editais</h1>

      <div className='button-search'>
      <BotaoCadastrar />
      <SearchBar />
      </div>
      {/* Array.isArray vai checar se a data sendo recebida pelo back é um array, caso contrário não vai renderizar nada
      coloquei aqui pra não ficar dando erro, mas caso preciso é só remover. */}
      {Array.isArray(cardsData) && cardsData.map((card) => (
      <Card
        key={card.id}
        name={card.name}
        type={card.type}
        description={card.description}
      />
    ))}
    </body>
  );
}

export default PaginaInicial;

