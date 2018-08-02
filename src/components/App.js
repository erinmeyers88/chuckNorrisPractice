import React, {Component} from 'react';
import './App.css';
import StyledButton from './StyledButton';
import StyledInput from './StyledInput';
import StyledHeader from './StyledHeader';
import StyledImage from './StyledImage';
import StyledLabel from './StyledLabel';

import JokeList from './JokeList';
import Chuck from '../chuck.png';

class App extends Component {

  render() {
    return (
      <div className="App">
        <StyledHeader className="App-header">
          <StyledImage src={Chuck} id="chuck"/>
          <StyledInput id="jokeCount" placeholder="How many jokes?" value={this.props.jokeCount}
                       onChange={(e) => this.props.changeJokeCount(e.target.value)}/>
          <StyledInput id="firstName" placeholder="First Name" value={this.props.firstName}
                       onChange={(e) => this.props.changeFirstName(e.target.value)}/>
          <StyledInput id="lastName" placeholder="Last Name" value={this.props.lastName}
                       onChange={(e) => this.props.changeLastName(e.target.value)}/>

          {
            this.props.jokeTypeOptions.map(type => <React.Fragment key={type}>
              <StyledInput type="checkbox" value={type} checked={this.props.jokeTypes.indexOf(type) >= 0} onChange={(e) => this.props.changeJokeTypes(e.target.value)}/>
              <StyledLabel>{type} Jokes</StyledLabel>
            </React.Fragment>)
          }

          <StyledButton
            onClick={
              (e) => {
                e.preventDefault();
                this.props.getJokes();
                document.getElementById('chuck').classList.add('spin-image');
                setTimeout(() => document.getElementById('chuck').classList.remove('spin-image'), 1500);
              }
            }>Get
            Jokes</StyledButton>
        </StyledHeader>
        <JokeList jokes={this.props.jokes}/>
      </div>
    );
  }
}

export default App;
