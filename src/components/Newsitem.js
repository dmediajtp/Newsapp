import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title , description, imgurl, newsurl} = this.props;
    return (
      <div>
        <div  className="card" style={{width: "18rem"}}>
  <img src={!imgurl?"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/800px-No_image_available.svg.png":imgurl}  className="card-img-top" alt="..." style={{ height: "150px", objectFit: "cover" }}/>
  <div  className="card-body">
    <h5  className="card-title">{title}</h5>
    <p  className="card-text">{description}</p>
    <a href={newsurl}  className="btn btn-sm btn-primary">read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem