import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Pokes = () => {
    const url = "https://pokeapi.co/api/v2/pokemon";
    const navigate = useNavigate();
    const [dataPokemon, setDataPokemon] = useState([]);
    const { name } = useParams();

    const PokemonData = async (e) => {
        let urlPokemon = `${url}/${name === 'default' ? 'charmander' : name}`;
        const request = await fetch(urlPokemon);

        await request
            .json()
            .then((data) => {
                setDataPokemon(data);

            })
            .catch((err) => {
                console.log(err);
            })
    }
    const BackHome = (e) => {
        e.preventDefault();        
        navigate("/");
    }
    useEffect(() => {
        PokemonData();
    }, []);

    return (
        <>
            <div className='d-flex flex-row justify-content-center gap-4 bg-secondary'>
                <div >
                    <img src={dataPokemon.sprites === undefined
                        ? "" : dataPokemon.sprites.other.dream_world.front_default} />
                </div>
                <ul>
                    <h5>{dataPokemon.name}</h5>
                    <li> Experiencia: {dataPokemon.base_experience}</li>
                    <h6 className="mt-2 mb-0">Habilidades</h6>
                    {dataPokemon.abilities === undefined ? '-' : dataPokemon.abilities.map((pok, index) => {
                        return (
                            <li key={index}>
                                {pok.ability.name}
                            </li>
                        );
                    })}                    
                    <h6 className="mt-2 mb-0">Tipos</h6>
                    {dataPokemon.types === undefined ? '-' : dataPokemon.types.map((pok, index) => {
                        return (
                            <li key={index}>
                                {pok.type.name}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className='d-flex flex-row justify-content-center '>
                <button type="submit" className="btn btn-primary btn-sm mt-3"
                    onClick={(e) => { BackHome(e) }}>Volver</button>
            </div >

        </>
    );
};
export default Pokes;
