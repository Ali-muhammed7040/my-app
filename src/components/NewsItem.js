import React, { Component } from "react";
export class NewsItem extends Component {



    render() {
      let {title,description,imgUrl,newsUrl} = this.props;
    return (
      <div>
        <div className="card" style={{width: '18rem'}}>
          <img src={!imgUrl ? "https://www.reuters.com/resizer/oum9xaY-uPXWV5jDFyBIvNuURMk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/YYCAGJEEXJPKVIVDQDIG42D2OQ.jpg":imgUrl} className="card-img-top" style={{height :'200px'}} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
