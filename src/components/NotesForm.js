import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { postData } = this.props;
    const { content } = this.state;

    postData(content);
    this.setState({
      content: '',
    });
  }

  render() {
    const { content } = this.state;

    return (
      <form className="Form" onSubmit={this.onSubmit}>
        <textarea
          className="Form__textbox"
          placeholder="New Note"
          name="content"
          value={content}
          onChange={this.onChange}
          required
        />
        <button className="Form__btn btn" type="submit">➤</button>
      </form>
    );
  }
}

NotesForm.propTypes = {
  postData: PropTypes.func.isRequired,
};

export default NotesForm;
