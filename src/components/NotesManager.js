import React, { Component } from 'react';
import NotesForm from './NotesForm';
import NotesContainer from './NotesContainer';

const url = 'https://ra-31-crud.herokuapp.com/notes';

export default class NotesManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };

    this.onDelete = this.onDelete.bind(this);
    this.getData = this.getData.bind(this);
    this.postData = this.postData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  onDelete(id) {
    fetch(`${url}/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(this.getData);
  }

  getData() {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          notes: [...json],
        });
      });
  }

  postData(content) {
    fetch(url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
        }),
      })
      .then(this.getData);
  }

  render() {
    const { notes } = this.state;

    return (
      <div className="App">
        <div className="Notes">
          <div className="Notes__header">
            <h1 className="Notes__title">Notes</h1>
            <button
              className="Notes__reload btn"
              type="button"
              onClick={this.getData}
            >
              ⭮
            </button>
          </div>

          <NotesContainer
            data={notes}
            onDelete={this.onDelete}
          />

          <NotesForm postData={this.postData} />
        </div>
      </div>
    );
  }
}
