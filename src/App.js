// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pokemon from './component/pokemon';
import Pagination from './component/pagination';


const App = ()=> {
  const [pokemonList, setPokemonList] = useState([]);
  const [pagenumber, setPageNumber] = useState('1');
  const [loading, setLoading] = useState(false);
  const numberofpage = [1, 2, 3, 4, 5];
  const changePageNumber = (e) =>{
      var temp = e.target.value;
      console.log('temp', temp);
      setPageNumber(temp);
  }
  useEffect(() =>{  
    setLoading(true);
    console.log('loading');
    axios.get(`https://api.pokemontcg.io/v2/cards?page=${pagenumber}&pageSize=10`).then(response =>{
      if(response.status == 200)
        setPokemonList(response.data.data);
        console.log('loading complete');
        setLoading(false);
    })
  }, [pagenumber])
  console.log('pokemonlist', pokemonList);
  return (
    <div>
      <Pokemon data={pokemonList} loading={loading} />
      {/* <Pagination pagenumber={pagenumber} setPageNumber={setPageNumber} /> */}
      <ul>
            {numberofpage.map((e, index)=>(
                <li><button key={e} value={e} onClick={changePageNumber}>{e}</button></li>
            ))}
        </ul>
    </div>
  );
}

export default App;
