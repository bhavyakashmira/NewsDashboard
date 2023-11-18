import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const DetailPage = () => {
    const location = useLocation();
    const article = location.state;
    const calculateReadTime = (content) => {
        const wordsPerMinute = 200; // Adjust this based on your estimation
        const wordCount = content.split(/\s/g).length;
        const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
        return readTimeMinutes;
    };


    return (
        <>
     
        <Container className="mt-5">
            {article ? (
                <>
    
                    <Card.Header style={{backgroundColor:'grey'}}>
                            <Card.Title className="mb-0">
                                <h1>{article.title}</h1>
                            </Card.Title>
                        </Card.Header>
                    <Card className="mb-4">
                        <Row className="no-gutters">
                                <Card.Text className="text-muted mb-2">
                                    <small>Estimated read time: {calculateReadTime(article.content)} minutes</small>
                                </Card.Text>
                                <Card.Img src={article.urlToImage} alt="article-img" className="img-fluid" />
                            <Col xs={12} md={8}>
                                <Card.Body>
                                    <Card.Text className="text-muted mb-2">
                                        <small>{article.publishedAt}</small>
                                    </Card.Text>
                                    <Card.Text className="mb-2">
                                        <strong>Author:</strong> {article.author}
                                    </Card.Text>
                                    <Card.Text>{article.description}</Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </>
            ) : (
                <h1>Loading</h1>
            )}
            </Container>
   </>
    );
};

export default DetailPage;



