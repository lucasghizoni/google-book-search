import React, { Component } from 'react';
import './App.css';
import Grid from './component/Grid.js';
import InputSearch from './component/InputSearch.js';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      items: [],
      url: ""
    };

    this.handleSearchResult = this.handleSearchResult.bind(this);
  }

  render() {
    return (
      <div className="container">
        <InputSearch maxResults="10" searchResult={this.handleSearchResult}/>
        <Grid url={this.state.url} items={this.state.items}/>
      </div>
    );
  }

  handleSearchResult(result){
    this.setState({
      items: result.data.items,
      url: result.url
    });
  }

}

export default App;
