import React, { createContext, useContext, useState, useEffect } from "react";

const ApiContext = createContext();

export function Contexts({ children }) {
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState([]);
    const [coun, setcoun] = useState("in");
    const [cat, setcat] = useState("entertainment");

    
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?category=${cat}&country=${coun}&apiKey=${process.env.REACT_APP_SECRET_KEY}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(newsData => {
                setData(newsData['articles'])
            })
            .catch(error => {
                console.error('Error:', error);
            });

    },[coun , cat])


    const [sharedData, setSharedData] = useState(' ');
    const [searchQuery, setSearchQuery] = useState('');

    const updateSharedData = (newData) => {
        setSharedData(typeof newData);
    };
    

    return (
        <ApiContext.Provider value={{ data, sharedData,setcat, setcoun, updateSharedData, searchQuery, setSearchQuery }}>
        {children}
        </ApiContext.Provider>
    );

}

export function useApi() {
    return useContext(ApiContext);
}