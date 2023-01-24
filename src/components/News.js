import React, { Component } from "react";
// import Footer from "./Footer";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps ={
    country: 'us',
    pageSize: 6,
    category: 'general',
  }
  static propTypes ={
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string,
  }
  constructor(props) {
    super(props);
    // this.state = { data: null };
     this.state = {
      data:null,
      page : 0,
      loading: false,
    }
  }

  // componentDidMount() {
  //   fetch(
  //     "https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1b620e9f74f24a9c89a88b83603ee181"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ data }));
  //     // console.log(data)
  // }
 
  async componentDidMount() {
    try {
      const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1b620e9f74f24a9c89a88b83603ee181&page=1&pageSize=${this.props.pageSize}`;
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ data ,
      totalArticles: data.totalResult,
        
      });
      console.log(data)

    } catch (error) {
      console.log(error);
    }
  }
  HandleNextClick = async()=>{
    console.log('Next Handle');

    if(!(this.state.page + 1 > Math.ceil(this.state.totalArticles/this.props.pageSize))){
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1b620e9f74f24a9c89a88b83603ee181&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    const response = await fetch(url);
    const data = await response.json();
    // this.setState({loading:false});

    this.setState({ data });

    this.setState({
      page: this.state.page+1,
      articles: data.articles,
  })}
  }
  HandlePrevClick = async()=>{
    console.log('Prev Handle');
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1b620e9f74f24a9c89a88b83603ee181&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data });

    this.setState({
      page: this.state.page - 1,
      articles: data.articles,

  })

  }


  render() {
    const { data } = this.state;
   
    if (!data) {
      return <Spinner></Spinner>;
    }
    return (
      <div className="container my-3">
        <h2 style={{color: 'white',margin: "40px 0px"}} className="text-center">TOP HEADLINES OF THE DAY </h2>
        <div className="row my-3">  
          {data.articles.map((element,idx)=>{
            return  <div className="col-md-4 my-3" key={data.articles[idx].url}>
              <NewsItem 
                 title={data.articles[idx].title}
                description={data.articles[idx].description}
                imgUrl={data.articles[idx].urlToImage}
                newsUrl = {data.articles[idx].url}
              ></NewsItem>
            </div>

          })}  
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.HandlePrevClick}>&larr;	Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.HandleNextClick}>Next 	&rarr;</button>
        </div> 
      </div>
    );
  }
}

export default News;
