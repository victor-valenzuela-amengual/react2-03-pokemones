import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import arc from '../superheros.json'

const Superheroes = () => {
    const url = './superheros.json'    
    const navigate = useNavigate();
    const [dataHero, setDataHero] = useState({});
    
    const HeroData = async (e) => {        
        const request = await fetch(url);
        await request
            .json()
            .then((data) => {
                setDataHero(data);

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
        HeroData();
    }, []);
    console.log(dataHero);
    return (
        <>
            <div className='d-flex flex-row justify-content-center gap-4 bg-secondary'>               
                <h5>{dataHero.name}</h5>
                {/* <ul>
                    <h5>{dataHero.name}</h5>
                    <li> Experiencia: {dataHero.base_experience}</li>
                    <h6 className="mt-2 mb-0">Habilidades</h6>
                    {dataHero.abilities === undefined ? '-' : dataHero.abilities.map((pok, index) => {
                        return (
                            <li>
                                {pok.ability.name}
                            </li>
                        );
                    })}                    
                    <h6 className="mt-2 mb-0">Tipos</h6>
                    {dataHero.types === undefined ? '-' : dataHero.types.map((pok, index) => {
                        return (
                            <li>
                                {pok.type.name}
                            </li>
                        );
                    })}
                </ul> */}
            </div>
            <div className='d-flex flex-row justify-content-center '>
                <button type="submit" className="btn btn-primary btn-sm mt-3"
                    onClick={(e) => { BackHome(e) }}>Volver</button>
            </div >

        </>
    );
};
export default Superheroes;
