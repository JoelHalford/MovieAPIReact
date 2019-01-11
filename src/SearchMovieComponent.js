import React, { Component } from 'react';
import axios from 'axios';
var resp;
var userInput;

class SearchMovieComponent extends Component {

  constructor() {

    super();
    this.state = {
      movies: "hi"
    }

    this.update = (event) => {
      userInput = event.target.value  //NOOOOO
      console.log(userInput)
      axios({
        method:'get',
        url:'http://www.omdbapi.com/?s=' + userInput +'&apikey=3a6de660',
        responseType:'json'
      })
      .then(response => {
        //logic to whether is should be set to something else
        if (response.data.Search == undefined)
        {

        }
        else
        {
          this.setState({
            movies: response.data.Search
           })
        }
      // .then(response => this.loopMovies());
      // this.loopMovies();
    })
  }}

  // loopMovies = () => {
  //   let ul = document.querySelector(".list-of-movies");
  //   console.log(this.state.movies[0].Title);

  //   for (let i = 0; i < 3; i++)
  //   {
  //     if (this.state.movies[i].Title == undefined)
  //     {
  //       console.log(this.state.movies[i].Title)
  //     } 
  //     else
  //     {
        
  //       let textNode = document.createTextNode("<li>" + this.state.movies[i].Title + "</li>");
  //       ul.appendChild(textNode)
  //     }      
  //   }
  // }

  render() {
    return (
      <div class="home-container">
        <h1>Welcome to the Movie Database</h1>
        <h4>Feel free to search for a movie</h4>
        <input id="userInput" type="text" placeholder="Enter movie name" onChange={this.update}/>
        <ul class="list-of-movies">
          <li>Title: {this.state.movies[0].Title}</li>
          <li>Type: {this.state.movies[0].Type}</li>
          <li>Year: {this.state.movies[0].Year}</li>
          <li><img src={this.state.movies[0].Poster}/></li>
        </ul>
      </div>
    );
  }
}

export default SearchMovieComponent;