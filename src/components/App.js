import React, {Component} from 'react';
import './App.css';
import StyledButton from './StyledButton';
import StyledInput from './StyledInput';
import StyledHeader from './StyledHeader';
import StyledImage from './StyledImage';

import JokeList from './JokeList';
import Chuck from '../chuck.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StyledHeader className="App-header">
          <StyledImage src={Chuck}/>
          <StyledInput id="jokeCount" placeholder="How many jokes?" value={this.props.jokeCount}
                       onChange={(e) => this.props.changeJokeCount(e.target.value)}/>
          <StyledInput id="firstName" placeholder="First Name" value={this.props.firstName}
                       onChange={(e) => this.props.changeFirstName(e.target.value)}/>
          <StyledInput id="lastName" placeholder="Last Name" value={this.props.lastName}
                       onChange={(e) => this.props.changeLastName(e.target.value)}/>
          <StyledButton
            onClick={() => this.props.getJokes(this.props.jokeCount, this.props.firstName, this.props.lastName)}>Get
            Jokes</StyledButton>
        </StyledHeader>
        <JokeList jokes={this.props.jokes}/>
      </div>
    );
  }
}

export default App;
