import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getJokes, changeJokeCount, changeFirstName, changeLastName} from '../actions';
import App from '../components/App';

class AppContainer extends Component {

  componentDidMount() {
    this.props.getJokes(5, 'Chuck', 'Norris');
  }

  render() {
    return <App {...this.props}/>;
  }
}

const mapStateToProps = (state) => ({
  jokes: state.main.jokes,
  jokeCount: state.main.jokeCount,
  firstName: state.main.firstName,
  lastName: state.main.lastName
});

const mapDispatchToProps = {
  getJokes,
  changeJokeCount,
  changeFirstName,
  changeLastName
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);