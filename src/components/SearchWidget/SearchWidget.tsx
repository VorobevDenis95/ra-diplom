import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeSearch, switchSearch } from "../../redux/slice/catalogSlice";


const SearchWidget = () => {
    const [isSearch, setSearch] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    
    const handleClickWidget = () => {
      isSearch ? setSearch(false) : setSearch(true);
    }

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const input = e.target[0].value;
      if (isSearch && input.trim()) {
          navigate('/catalog');
          dispatch(changeSearch(input));
          dispatch(switchSearch(true));
          setSearch(false);
      }  
    }

    return (
        <>
            <form className='form-search-item' onSubmit={handleSubmit} >
                {isSearch && <input className="form-search" type="text" placeholder='поиск' />}
                <div data-id='search-expander' onClick={handleClickWidget} 
                className={`header-controls-pic header-controls-search ${isSearch ? 'search-active' : ''}`}/>   
            </form>
        </>
    )
}

export default SearchWidget;