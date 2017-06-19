import React, { Component } from 'react';

class Grid extends Component {

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
        <table className="table table-hover">
          <thead>
              <tr>
                  <th>Title</th>
                  <th>Author</th>
              </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
    );
  }
}

export default Grid;