import React from 'react';
import './Country.css';
const Country = (props) => {
    console.log(props)
    const {name,region,flags} = props.country;
    return (
        <div className='country-container'>
            <h1>Country</h1>
            {/* <p>Name: {props.name.common}</p>
            <img src={props.flag.png} alt="" /> */}

            <h2>Name: {name.common}</h2>
            <h3>Region: {region}</h3>
            <img src={flags.png} alt="" />

        </div>
    );
};

export default Country;