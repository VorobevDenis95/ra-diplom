import { useDispatch, useSelector } from "react-redux";
import { changeSearch, fetchSearch, switchSearch } from "../../redux/slice/catalogSlice";
import { useEffect, useState } from "react";

const Search = () => {
    const [inputValue, setInput] = useState('');
    const dispatch = useDispatch();
    const {search, statusSearch} = useSelector(state => state.catalog);

    useEffect(() => {
        if (statusSearch) {
            dispatch(fetchSearch(search)); 
            dispatch(switchSearch(false));
        }
    }, [statusSearch])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(search));
    }

    const handleChange = (e) => {
      dispatch(changeSearch(e.target.value))
    }

    const handleBlur = (e) => {
        dispatch(changeSearch(''));
    }

    return (
        <form onSubmit={handleSubmit} className="catalog-search-form form-inline">
            <input className="form-control" value={search} 
            onChange={handleChange} onBlur={handleBlur} placeholder="Поиск"/>
        </form>
    )
}

export default Search;