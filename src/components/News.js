import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    

    constructor(){
        super();
        console.log("Hello");
        this.state = {articles: [],
          loading: false,
          page: 1
        }
    }


    async componentDidMount(){
      let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2bf7c298b6874eea9074f465dcc8013f&page=1";
      //let url = "http://localhost/api/api.php";
      let data = await fetch(url);
      let parsedData = await data.json()
      //console.log(parsedData);
      this.setState({articles: parsedData.articles})
    }

    previousfun = async () =>{
      console.log("previous");
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2bf7c298b6874eea9074f465dcc8013f&page=${this.state.page - 1}`;
      //let url = 'http://localhost/api/api.php?page=${this.state.page + 1}';
      let data = await fetch(url);
      let parsedData = await data.json()
      //console.log(parsedData);
      this.setState({articles: parsedData.articles,
        page: this.state.page - 1

      })

    }

    nextbun= async () =>{
      console.log("next");
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2bf7c298b6874eea9074f465dcc8013f&page=${this.state.page + 1}`;
      //let url = 'http://localhost/api/api.php?page=${this.state.page + 1}';
      let data = await fetch(url);
      let parsedData = await data.json()
      //console.log(parsedData);
      this.setState({articles: parsedData.articles,
        page: this.state.page + 1

      })

    }

  render() {

    return (
      <div className="container py-3">
        
       <div className="row">

       {this.state.articles.map((element)=>{
            return <div className="col-md-3 py-3" key={element.url}>
            <Newsitem title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0,80):""} imgurl={element.urlToImage} newsurl={element.url}/>
            </div>
        })}

       
       </div>

       <div className="container d-flex justify-content-between">
       <button disabled={this.state.page<1} type="button" className="btn btn-dark" onClick={this.previousfun}>&larr;Previous</button>
       <button type="button" className="btn btn-dark" onClick={this.nextbun}>Next&rarr;</button>
      </div>
      </div>
      
    )
  }
}

export default News