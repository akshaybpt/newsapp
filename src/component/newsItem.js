import React, { Component } from 'react';
import './newsItem.css';
import newsPic from '../news.jpg';
export class NewsItem extends Component {

  render() {
    let { tittle, description, imgUrl, newsUrl, author, publish, mode,source } = this.props;
    return (
      <>
        <div className="card  ">
          <div>
          <span class="position-absolute    badge rounded-pill bg-danger" style={{left:'0'}}>Source : {source}</span>
          </div>
       
          <img src={imgUrl ? imgUrl : newsPic} className="card-img-top" alt=" Not Available" />
          <div className={`card-body text-center bg-${mode}`}>
            <h5 className="card-title">{tittle}...</h5>
            <h6 className={`card-subtitle mb-2 text-${mode === 'light' ? 'muted' : 'white-50'} `} >Author: {!author ? source : author}</h6>
            <p className={`card-text text-${mode === 'light' ? 'muted' : 'white-50'}`}><small>Published At: {new Date(publish).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}</small></p>
            <p className="card-text "> {!description ? "The past six months have been challenging for Twitter employees, who have primarily foll." : description}... </p>
           
            <a rel="noreferrer" href={newsUrl} target="_blank" className={`btn btn-${mode === 'light' ? 'secondary' : 'light'} rounded-pill `}>Read More</a>
            
            
          </div>
        </div>
      </>
    )
  }
}

export default NewsItem