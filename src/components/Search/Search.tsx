import { useDispatch, useSelector } from "react-redux";
import { changeSearch, fetchSearch, switchSearch } from "../../redux/slice/catalogSlice";
import { useEffect } from "react";

const Search = () => {
    const dispatch = useDispatch();
    const {search, statusSearch} = useSelector(state => state.catalog);

    useEffect(() => {
        if (statusSearch) {
            dispatch(switchSearch(false));
            dispatch(fetchSearch(search)); 
        }
    }, [statusSearch])
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchSearch(search));
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(changeSearch(e.target.value))
    }

    const handleBlur = () => {
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