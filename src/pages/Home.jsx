import React , {useEffect,useState} from 'react'
import NewsCards from '../components/NewsCards';
import CardGroup from 'react-bootstrap/CardGroup';
import NavBar from '../components/NavBar';
import { useApi } from '../Context/Contexts';

function Home() {
  const { data, sharedData, searchQuery } = useApi();
  
  return (
    <div style={{}}>
      <CardGroup>
        {data.length > 0 ? (

          searchQuery !== '' ? (data.filter((item) => {
            const val = item.attributes.headline.toLowerCase()
            console.log(val)
            return searchQuery.toLowerCase() === ''
              ? item :
              item.attributes.headline.toLowerCase().includes(searchQuery) 
          }).map((item) => {
            <div key={item.id} className="news-item">
              <NewsCards {...item.attributes} />
            </div>
          })) : (
            data.map((item) => (
              (!sharedData || item.attributes.category === sharedData) && (
                <div key={item.id} className="news-item">
                  <NewsCards {...item.attributes} />
                </div>
              )
            ))
          )) :
          (
            <p>Loading data...</p>
          )}
      </CardGroup>
    </div>
  )
}

export default Home
