import imgpoke from '../assets/img/pokehome.png'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [data, setData] = useState([]);
    const [nombrePoke, setNombrePoke] = useState("");
    const navigate = useNavigate();
    const url = "https://pokeapi.co/api/v2/pokemon";

    const ListarPokemones = async () => {
        const request = await fetch(url);
        await request
            .json()
            .then((e) => {
                //setData(response);                
                setData(e.results);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const PokemonData = (e) => {
        e.preventDefault();      
        console.log(nombrePoke);
        if(nombrePoke!="")
            navigate(`/pokes/${nombrePoke}`);
    }
    useEffect(() => {
        ListarPokemones();
    }, []);

    return (
        <div className='d-flex flex-column  align-items-center bg-secondary'>
            <h4>
                Welcome, Master
            </h4 >
            <div>
                <img src={imgpoke} alt="pokemon" />
            </div>

            <h4>
                Selecciona un Pokemón
            </h4 >
            <form>
                <select className="form-select" aria-label="Default select example"
                    onChange={(e) => { setNombrePoke(e.target.value) }}  >
                    {/* onChange={(e) => { PokemonUrl(e) }}  >                                             */}
                    <option value="Pokemones" >Pokemones</option>
                    {data.map((poke, index) => {
                        return (
                            <option key={index} value={poke.name} >{poke.name}
                            </option>
                        );
                    })}
                </select>
                <button type="submit" className="btn btn-primary btn-sm mt-3 mb-3 ms-3"
                    onClick={(e) => { PokemonData(e) }}>Ver Detalles</button>
            </form>
        </div>
    )
}
export default Home