import React, { Component } from 'react';

class Grid extends Component {

  constructor(props){
    super(props);

    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrevious = this.handleClickPrevious.bind(this);
  }

  render() {

  	var rows = this.props.items.map(function(item) {
      return (
      		<tr key={item.id}>
		        <td>{item.volumeInfo.title}</td>
		        <td>{item.volumeInfo.authors}</td>
		    </tr>
      );
    });

    return (
      <div>
        <table className="table table-hover">
          <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
              </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        <button onClick={this.handleClickPrevious}>Previous</button>
        <button onClick={this.handleClickNext}>Next</button>
      </div>
    );
  }

  handleClickNext(){
    debugger;
    fetch(this.props.url + "&startIndex=40").then(response => {
      response.json().then(data => {
        this.props.items = data.items;
      });
    });
  }

  handleClickPrevious(){

  }
}

export default Grid;