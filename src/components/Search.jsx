import {React, useState} from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'


function Search() {

    const [input, setInput] = useState('');

    const submitHandler = (e) => {
        console.log('hey');
    };

  return (
    <FormStyle onSubmit={submitHandler}>
        <FaSearch></FaSearch>
        <div>
            <input 
                onChange={(e) => setInput(e.target.value)}
                type='text'
                value={input}
            />
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 20rem;
        div{
            position: relative;
            width: 100%; 
        }
    
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131)
        font-sixe: 1.5 rem;
        color: black;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: black;
    }
    `;
export default Search