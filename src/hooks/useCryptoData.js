import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchCryptoList} from "../store/slice/cryptoSlice.js";


const useCryptoData =()=>{

const dispatch = useDispatch();
const {list, loading , error, currency} = useSelector((state)=>
state.crypto
);

useEffect(()=>{
    dispatch(fetchCryptoList({
        page, perPage, currency
    }))
},[dispatch,page, perPage, currency])
return {cryptoList: list, loading , error}


}

export default useCryptoData;