import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {APIKEY} from "./lib/apiKey";

const Contact = () => {
    const [topRated, setTopRated] = useState([])

    const getTopRated = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = await url
        await setTopRated(data.results)
    }

    useEffect(() => {
        getTopRated()
    }, [])

    return (
        <div className="container">
            <div className="flex flex-wrap flex-row justify-between">
                {
                    topRated.map(el => (
                        <div className="basis-1/5 m-4">
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                            <h1 className="font-bold text-lg">{el.title}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Contact;