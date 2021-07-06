import React, { useState } from 'react';
// animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
// redux and routes
import { fectchSearch } from '../actions/gamesAction'; 
import { useDispatch } from 'react-redux';

const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState('');

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };
    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fectchSearch(textInput));
        setTextInput('');
    }
    const clearSearch = () => {
        dispatch({ type: "CLEAR_SEARCHED" });
    };
    return(
        <StyledNav>
            <Logo onClick={clearSearch}>
                <h1>Info Games</h1>
            </Logo>
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text" />
                <button onClick={submitSearch} type="submit">Search</button>
            </form>
        </StyledNav>
    );
};

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;
    input {
        width: 30%;
        font-size: 1.5rem;
        padding: .5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0 0 30px rgba(0, 0, 0, .2);
    }
    button {
        font-size: 1.5rem;
        border: none;
        padding: .5rem 2rem;
        cursor: pointer;
        background: #000;
        color: #fff;
    }
`;
const Logo = styled(motion.div)`
    padding: 1rem;
    cursor: pointer;
    font-size: 2rem;
`;

export default Nav;