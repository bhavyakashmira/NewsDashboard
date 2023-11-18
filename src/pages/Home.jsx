import React , {useEffect,useState} from 'react'
import NewsCards from '../components/NewsCards';
import CardGroup from 'react-bootstrap/CardGroup';
import NavBar from '../components/NavBar';
import { useApi } from '../Context/Contexts';

function Home() {

  const { data, sharedData, searchQuery } = useApi();
  

  const data1 = searchQuery
    ? data.filter(article =>
      article.description &&
      (article.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) 
      )
    : data;
 

    return (
      <div>

        <CardGroup>
        {
          data1.map( (article , index) => (
            <div key={index}>
              <NewsCards {...article}/>
            </div>
          ))
          }
        </CardGroup>
      </div>
    );

};

export default Home;



