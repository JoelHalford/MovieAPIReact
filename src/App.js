import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

import HeaderComponent from './HeaderComponent';
import SearchMovieComponent from './SearchMovieComponent';

var resp;

class App extends Component {

  constructor() {
    super();
   //  axios({
   //    method:'get',
   //    url:'http://www.omdbapi.com/?s=lord&apikey=3a6de660',
   //    responseType:'json'
   //  })
   //  .then(function(response) {
   //    resp = response.data.Search[0].Title;
   //    console.log(resp);
   //    console.log("shit");
  	// });

   //  this.update = () => {

   //    this.setState({

   //    });
   //  }
  }

  render() {
    return (
      <div class="App App-header"> 
      	<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
      	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script> 
      	<script type="text/javascript" src="main.js"></script>
      	< HeaderComponent />
      	< SearchMovieComponent />
      	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	  	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
      </div>
    );
  }
}

export default App;
