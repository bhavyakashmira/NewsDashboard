import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function NewsCards(props) {
  return (
   
      <Card style={{ width: '400px', marginLeft:'100px', marginTop:'20px' }}>
              <Card.Img variant="top" src={props.newsIcon} style={{height:'300px',padding:'20px'}} />
              <Card.Body style={{backgroundColor:'grey'}}>
                <Card.Title >{props.headline}</Card.Title>
              <Card.Title style={{ fontSize: '15px' }} >{props.hashtags}</Card.Title>
              <Card.Title style={{ fontSize: '12px' }}>News Source:{props.newsSource}</Card.Title>
              </Card.Body>
          </Card>
   
  )
}

export default NewsCards
