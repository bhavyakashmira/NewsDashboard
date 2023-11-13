import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function NewsCards(props) {
  const navigate = useNavigate();

  const handledata = () => {
    navigate('/topic' , {state : props})
  }
  
  return (
      <Card style={{ width: '400px', marginLeft:'100px', marginTop:'20px' }}>
              <Card.Img variant="top" alt='article img' src={props.urlToImage} style={{height:'300px',padding:'20px'}} />
              <Card.Body style={{backgroundColor:'grey'}}>
                <Card.Title >{props.title}</Card.Title>
              <Card.Title style={{ fontSize: '15px' }} >{props.content}</Card.Title>
           <Card.Title style={{ fontSize: '12px' }}>News Source:{props.newsSource}</Card.Title>
             <Button onClick={handledata} >Read More</Button> 
              </Card.Body>
          </Card>
   
  )
}

export default NewsCards
