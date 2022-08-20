import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "./lib/apiKey";
import {Link, useParams} from "react-router-dom";

const Home = () => {

    const [popular, setPopular] = useState([])

    const getPopular = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = await url
        await setPopular(data.results)
    }
    const {id} = useParams()
    useEffect(() => {
        getPopular()
    }, [])

    return (
        <div className="container">
            <div className="flex flex-wrap flex-row justify-between">
                    {
                        popular.map(el => (
                            <div className="basis-1/5 m-4">
                                <Link to={`/card/${id}`}>
                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                                </Link>
                                <h1 className="font-bold text-lg">{el.title}</h1>
                            </div>
                        ))
                    }
            </div>
        </div>
    );
};

export default Home;