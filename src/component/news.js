import React, { Component } from 'react'
import NewsItem from './newsItem'
import "../output.json";
import Spinner from './spinner';
import PropTypes from 'prop-types';

export class news extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 10,
    category: 'general',
    mode: 'dark'
  }
  propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    mode: PropTypes.string
  }
  constructor() {
    super();
    console.log("hello this is news item");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=466e5c5c122748deba1e3b4795759a52&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
    document.tittle='News App'+ this.props.category; 
  }
  handelNextClick = async () => {

    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=466e5c5c122748deba1e3b4795759a52&page=${this.state.page + 1}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
      this.setState({ loading: true })
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false
      })

    }

  }
  handelPrevClick = async () => {

    console.log("previous");

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=466e5c5c122748deba1e3b4795759a52&page=${this.state.page - 1}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false
    })
  }
  render() {
    return (
      <>
        <div className="container">
          <h2 className="my-2">News Application</h2>
          {this.state.loading && <Spinner />}
          <div className="row ">
          {<h4 className="mt-2"> News related to {this.props.category.toLowerCase().split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ")}  </h4>}
            { 
              !this.state.loading && this.state.articles.map((element) => {
                console.log("hello this is news item inside the map");
                return <div className=" col-12 col-md-6 col-lg-3 mt-5" key={element.url}>
                  <NewsItem tittle={element.title ? element.title.slice(0, 45) : "No tittle"}
                    description={element.description ? element.description.slice(0, 88) : ""}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    publish={element.publishedAt}
                    mode={this.props.mode}
                  />
                </div>
              })
            }
          </div>

        </div>
        <div className="container my-5 d-flex justify-content-between px-5">
          <button disabled={this.state.page <= 1} type="button" className={`btn btn-${this.props.mode}`} onClick={this.handelPrevClick}> &laquo; Previous </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className={`btn btn-${this.props.mode}`} onClick={this.handelNextClick}>Next &raquo;</button>
        </div>
      </>

    )
  }
}

export default news