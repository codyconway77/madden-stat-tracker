import './assets/App.css';
import React from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Games from './components/Games';
import Home from './components/Home';
import Login from './components/Login';
import Players from './components/Players';
import GameInput from './components/GameInput';
import { Component } from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Games: [],
      Players: [],
      Errors: []
    }
  }
  componentDidMount() {
    this.renderGames();
    this.renderPlayers();
  }

  renderGames = async() => {
    try {
      let res = await axios.get('/api/games')
        .catch(function(error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
      let games = res.data;
      //RE render the view with new data
      this.setState({
        Games: games.map(game => game)
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  renderPlayers = async() => {
    try {
      let res = await axios.get('/api/players')
        .catch((error) => console.log(error.toJSON()));
      let players = res.data;
      console.log(players);
      this.setState({
        Players: players.map(player => player)
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  

  render() {
    /* const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.state.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to="/Login" />
      )} />
    ) */
    let auth = localStorage.getItem('token');
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div>
            <Route path='/Home' component={Home} />
            <Route path='/Login' component={Login} />
            { auth ? <Route path='/Game-Input' component={GameInput} /> : null}
            <Route path='/Games' render={props => (
              (<Games {...props} games={this.state.Games} />)
            )} />
            <Route path='/Players' render={props => (
              (<Players {...props} players={this.state.Players} />)
            )} />
          </div>    
        </div>
      </BrowserRouter>
    );
  }  
}

//testing stuff- here it is if it needs to be put back
//<div className="games-container">{this.state.Games}</div> 


export default App;
