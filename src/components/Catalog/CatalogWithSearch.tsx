import React, { useEffect } from 'react'
import Search from "../Search/Search";
import Catalog from "./Catalog";
import { useSelector, useDispatch } from 'react-redux';



const CatalogWithSearch = () => {

  // const dispatch = useDispatch();
  // const {search} = useSelector(state => state.catalog);

  // useEffect(() => {
  
  // }, [])

  return (
    <Catalog>
      <Search />
    </Catalog>
  )
};

export {CatalogWithSearch};