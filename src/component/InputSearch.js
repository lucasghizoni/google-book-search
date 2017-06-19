import React, { Component } from 'react';

class InputSearch extends Component {

  constructor(props){
    super(props);

    this.state = {
      url: "https://www.googleapis.com/books/v1/volumes?q=",
      words: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return (
      <div>
        <input onChange={this.handleInputChange} placeholder="Book" />
        <button onClick={this.handleClick} >Search</button>
      </div>
    );
  }

  handleClick(){
    const url = `${this.state.url}${this.state.words}&maxResults=${this.props.maxResults}`;

    fetch(url).then(response => {
      response.json().then(data => {
        this.props.searchResult({
          data: data,
          url: url
        });
      });
    });
  }

  handleInputChange(e){
    this.setState({
      words: e.target.value.replace(" ", "+")
    });
  }


}

export default InputSearch;