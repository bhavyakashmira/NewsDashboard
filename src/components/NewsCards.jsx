// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useNavigate } from 'react-router-dom';


// function NewsCards(props) {
//   const navigate = useNavigate();

//   const handledata = () => {
//     navigate('/topic' , {state : props})
//   }
  
//   return (
//       <Card style={{ width: '400px', marginLeft:'100px', marginTop:'20px' }}>
//               <Card.Img variant="top" alt='article img' src={props.urlToImage} style={{height:'300px',padding:'20px'}} />
//               <Card.Body style={{backgroundColor:'grey'}}>
//                 <Card.Title >{props.title}</Card.Title>
//               <Card.Title style={{ fontSize: '15px' }} >{props.description}</Card.Title>
//            <Card.Title style={{ fontSize: '12px' }}>News Source:{props.newsSource}</Card.Title>
//              <Button onClick={handledata} >Read More</Button>
//               </Card.Body>
//           </Card>
   
//   )
// }

// export default NewsCards





import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function NewsCards(props) {
  const navigate = useNavigate();

  const handleData = () => {
    navigate('/topic', { state: props });
  };

  return (
    <Card style={{ width: '300px', margin: '20px', borderRadius: '10px', overflow: 'hidden' }}>
      <Card.Img
        variant="top"
        alt="article img"
        src={props.urlToImage}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body style={{ backgroundColor: '#f8f9fa', color: '#343a40', padding: '20px' }}>
        <Card.Title style={{ fontSize: '18px', marginBottom: '10px', fontWeight: 'bold' }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{ fontSize: '14px', marginBottom: '15px' }}>{props.description}</Card.Text>
       
        <Button variant="info" onClick={handleData} style={{ fontSize: '14px' }}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default NewsCards;

