import { useState } from 'react';
import PropTypes from 'prop-types';

const EditRecordForm = ({ record, onSave, onCancel }) => {
  const [name, setName] = useState(record.name);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...record, name });
  };

  return (
    <div className="edit-record-form">
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
    </div>
  );
};

EditRecordForm.propTypes = {
  record: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EditRecordForm;