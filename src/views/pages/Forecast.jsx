import React, { useEffect, useState } from 'react'
import logo from '../../img/5.png'
import axios from 'axios';


const Forecast = () => {
    const [apiData, setApiData] = useState([])

    useEffect(async () => {
        const apiData = await (await axios.get('https://us-central1-express-439e0.cloudfunctions.net/app/getWeather/5')).data
        await setApiData(apiData)
    }, [])

    return (
        <div className="section">
            <div className="section__title__box">
                <h1 className="section__title">Weather Forecast</h1>
                <img className="section__title__image" src={logo} alt="sun" />
            </div>
            <div className="content">
                <div className="content__national">
                    <div className="content__picture content__picture__1">
                        &nbsp;
                    </div>
                    <h4 className="content__title content__title__1">
                        <span>Weather Forecast</span>
                    </h4>
                    <div className="content__body">
                        <a target='_blank' href={apiData[0]} className='content__btn'>Daily Weather (Sinhala)</a>
                        <a target='_blank' href={apiData[1]} className='content__btn'>Daily Weather (Tamil)</a>
                        <a target='_blank' href={apiData[2]} className='content__btn'>Medium Range Forecast</a>
                        <a target='_blank' href={apiData[3]} className='content__btn'>Seasonal Weather Forecast</a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Forecast;