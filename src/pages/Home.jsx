import React , {useEffect,useState} from 'react'
import NewsCards from '../components/NewsCards';
import CardGroup from 'react-bootstrap/CardGroup';
import NavBar from '../components/NavBar';
import { useApi } from '../Context/Contexts';

function Home() {

  const { data, sharedData, searchQuery } = useApi();
    return (
      <div>
    
        <CardGroup>
        {
          data.map( (article , index) => (
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
