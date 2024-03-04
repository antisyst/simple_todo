import { useState } from "react";
import PropTypes from "prop-types";
import { IoAddOutline } from "react-icons/io5";

const AddRecordForm = ({ addRecord, maxLength }) => {
  const [name, setName] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || name.trim().length > maxLength) {
      alert(`Record name must be between 1 and ${maxLength} characters.`);
      return;
    }

    const newRecord = {
      id: Math.floor(Math.random() * 1000),
      name: name.trim(),
      completed: false,
    };

    addRecord(newRecord);

    setName("");
    setShowForm(false);
  };

  const handleCancel = () => {
    setName("");
    setShowForm(false);
  };

  return (
    <div className="add-record-form">
      {!showForm ? (
        <button onClick={() => setShowForm(true)} className="toggle-button"><IoAddOutline/> Add New Record</button>
      ) : (
        <div className="open-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={`Enter record name (max ${maxLength} characters)`}
            value={name}
            onChange={handleChange}
          />
          <div className="buttons">
            <button type="submit">Add</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
        </div>
      )}
    </div>
  );
};

AddRecordForm.propTypes = {
  addRecord: PropTypes.func.isRequired,
  maxLength: PropTypes.number.isRequired,
};

export default AddRecordForm;
