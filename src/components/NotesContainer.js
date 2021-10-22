import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

class NotesContainer extends PureComponent {
  render() {
    const { data, onDelete } = this.props;

    return (
      <div className="NotesContainer">
        {
          data.length
            ? data.map(
              (note) => (
                <Note
                  content={note.content}
                  onDelete={() => onDelete(note.id)}
                  key={note.id}
                />
              ),
            )
            : <div>No notes yet</div>
        }
      </div>
    );
  }
}

NotesContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NotesContainer;
