import styles from "./Home.module.css";
import { useState} from 'react'
import useFetch from "react-fetch-hook";

const Home = () => {

  const [cep, setCep] = useState("")

   const { data, isLoading, error } = useFetch(`viacep.com.br/ws/89560380/json/`);

  console.log(data)
  const handleSubmit = (e) =>{
    e.preventDefault()



  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Digite o cep: </span>
          <input type="text" name="cep" onChange={(e) => setCep(e.target.value)}/>
        </label>
        <button type="submit">Buscar</button>
      </form>
      {cep && (
        <div>
        {data && data.map((data)=>(
          <p>Data: {data.cep}</p>
        ))}
        </div>
      )}
    </div>
  );
};

export default Home;
