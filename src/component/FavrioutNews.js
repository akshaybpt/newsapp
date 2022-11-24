import React,{useContext,useEffect,} from 'react';

import newsContext from '../context/newsContex';
import FavNewsItem from './FavNewsItem';


const FavrioutNews = (props) => {
    
    const context =useContext(newsContext);
    const {getNews,news}= context;

    useEffect(() => {
         // eslint-disable-next-line
         
            getNews();
          
        
    }, [])

    
  return (
    <div>
     <div className="container">
      <div className="row ">
      {news.length === 0 && 'No favrouit  news to display'}
            {news.map((element)=>{
        return  <div className="col-md-4 my-3" key={element._id} >
            <FavNewsItem news={element} showAlert={props.showAlert} mode ={props.mode}/> 
          
            </div>
     })}
     
     
          </div>
     </div>
    </div>
  )
 
}

export default FavrioutNews