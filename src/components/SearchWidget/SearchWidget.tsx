import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changeSearch, switchSearch } from "../../redux/slice/catalogSlice";


const SearchWidget = () => {
    const [isSearch, setSearch] = useState(false);
    const inputSearch = useRef('');
    const navigate = useNavigate();

    const dispatch = useDispatch();
    
    const handleClickWidget = () => {
      isSearch ? setSearch(false) : setSearch(true);
    }

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (isSearch && inputSearch.current.trim()) {
          navigate('/catalog');
          dispatch(changeSearch(inputSearch.current));
          dispatch(switchSearch(true));
          setSearch(false);
      }  
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      inputSearch.current = e.target.value;  
    }

    return (
        <>
            <form className='form-search-item' onSubmit={handleSubmit} >
                {isSearch && <input name='search' onChange={handleChange} className="form-search" type="text" placeholder='поиск' />}
                <div data-id='search-expander' onClick={handleClickWidget} 
                className={`header-controls-pic header-controls-search ${isSearch ? 'search-active' : ''}`}/>   
            </form>
        </>
    )
}

export default SearchWidget;