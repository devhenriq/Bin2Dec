import React, { useState } from 'react';

function Conversor() {
    let [binary, setBinary] = useState('');
    let [decimal, setDecimal] = useState('');

    let convert = (value) => {
        return value
    }

    let binaryConversion = (binary) => {
        let decimal = binary.split('').reverse();
        setDecimal(decimal);
    }
    let handleChange = (e) => {
        let value = e.target.value;
        if(/[01]$/.test(value) || value === ""){
            setBinary(value);
            binaryConversion(value);
        }
    }
    return(
        <div>
            <p>Type a binary: </p>
            <input id="binary" 
                placeholder="Type a binary" 
                onChange={handleChange}
                maxLength="8"
                value={binary}
            >
            </input>
            <p>{decimal}</p>
        </div>
    );
}

export default Conversor;