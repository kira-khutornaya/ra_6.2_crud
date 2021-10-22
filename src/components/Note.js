import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Note extends PureComponent {
  render() {
    const { content, onDelete } = this.props;

    return (
      <div className="Note">
        <div className="Note__text">{content}</div>
        <button
          className="Note__remove btn"
          type="button"
          onClick={onDelete}
        >
          ✘
        </button>
      </div>
    );
  }
}

Note.propTypes = {
  content: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Note;
