import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    const [age, setage] = useState(29);

    const birthday = () => {
        setage(age + 1)
    }

    return (
        <div>
            <h1>Hola {props.name} desde la funcion</h1>
            <h2>Cual es tu eda: {age} </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir año
                </button>
            </div> 
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string

};


export default GreetingF;
