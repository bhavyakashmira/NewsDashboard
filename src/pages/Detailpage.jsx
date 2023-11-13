import React from 'react';
import { useLocation  } from 'react-router-dom';

const DetailPage = () => {
    const location = useLocation();
    const article = location.state
    console.log(article);
    return (
        <div>
           
            {article ? (
                <> 
                    <h1>{article.title}</h1>
                    <h4>{article.publishedAt}</h4>
                    <h4>{article.author}</h4>
                 <img src={article.urlToImage} alt="article-img" style={{height:'600px' , width:'700px' , marginLeft:'300px' , padding:'100px'}} />
                    <p>Author: {article.author}</p>
                    <p>{article.content}</p>
                </>
            ) : (
                    <h1>Loading</h1>
            )}
        </div>
    );
};

export default DetailPage;
