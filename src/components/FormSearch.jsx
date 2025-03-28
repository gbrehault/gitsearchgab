import React, { useState } from 'react'
import App from '../App';
import { FaSearch } from "react-icons/fa";
import "./FormSearch.css";


const SearchForm = ({ onSubmit, totalCount }) => {
    const [input, setInput] = useState("");
    const submit = (e) => {
        e.preventDefault();
        onSubmit(e.target.userName.value);
        e.target.reset();
    }
    return (
        <form className="input-search" onSubmit={submit}>
            <FaSearch id="search-icon" />
            <input
                type="text"
                name="userName"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <p className='total'>{totalCount} résultats trouvés</p>
            <button type="submit">Submit</button>
        </form>
    );
}

export default SearchForm