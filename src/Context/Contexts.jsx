import React, { createContext, useContext, useState, useEffect } from "react";

const ApiContext = createContext();

export function Contexts({ children }) {
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://linesnews.onrender.com/api/news-datas")
            .then((response) => response.json())
            .then((data) => { setData(data.data); setFilteredData(data.data); })
    }, [])

    const [sharedData, setSharedData] = useState(' ');
    const [searchQuery, setSearchQuery] = useState('');

    const updateSharedData = (newData) => {
        setSharedData(newData);
    };
    

    return (
        <ApiContext.Provider value={{ data, sharedData, updateSharedData, searchQuery, setSearchQuery }}>
        {children}
        </ApiContext.Provider>
    );

}

export function useApi() {
    return useContext(ApiContext);
}