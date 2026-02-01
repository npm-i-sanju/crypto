import { useEffect, useState } from "react";
import {FiSearch} from "react-icons/fi";
import useDebounce from "../../../hooks/useDebounce.js";


const SearchBar = ({onSearch, placeholder = "Search cryptocurrencies..."})=>{
    const [query, setQuery]= useState("");
    const debouncedQuery = useDebounce(query, 300)
    
    const handleChange=(e)=>{
        setQuery(e.target.value);
    }
useEffect(()=>{
    onSearch(debouncedQuery);
},[debouncedQuery])

    return (
        <div className="relative">
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="input-field pl-12"
      />
    </div>
    );
};

export default SearchBar;