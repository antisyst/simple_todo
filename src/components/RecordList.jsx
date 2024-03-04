import { useState } from "react";
import PropTypes from "prop-types";
import EditRecordForm from "./EditRecordForm";
import SearchBar from "./SearchBar";

const RecordList = ({ records, toggleStatus, deleteRecord, editRecord }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [editRecordId, setEditRecordId] = useState(null);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleToggleStatus = (id) => {
    toggleStatus(id);
  };

  const handleDeleteRecord = (id) => {
    deleteRecord(id);
  };

  const handleEdit = (id) => {
    setEditRecordId(id);
  };

  const handleEditCancel = () => {
    setEditRecordId(null);
  };

  const handleEditSave = (updatedRecord) => {
    editRecord(updatedRecord);
    setEditRecordId(null);
  };

  const filteredRecords = records.filter(
    (record) =>
      record.name &&
      record.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="record-list">
      <h2>Records</h2>
      <SearchBar onSearch={handleSearch} />
      {filteredRecords.length === 0 ? (
        <p className="available_status">No records available.</p>
      ) : (
        <div className="records">
          {filteredRecords.map((record) => (
            <div
              key={record.id}
              className={record.completed ? "completed" : ""}
              id="record-item"
            >
              <span
                onClick={() => handleToggleStatus(record.id)}
                className="completing"
              >
                {record.name} (click for complete)
              </span>
              <div className="buttons">
                <button onClick={() => handleEdit(record.id)}>Edit</button>
                <button onClick={() => handleDeleteRecord(record.id)}>
                  Delete
                </button>
                {editRecordId === record.id && (
                  <EditRecordForm
                    record={record}
                    onSave={handleEditSave}
                    onCancel={handleEditCancel}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

RecordList.propTypes = {
  records: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleStatus: PropTypes.func.isRequired,
  deleteRecord: PropTypes.func.isRequired,
  editRecord: PropTypes.func.isRequired,
};

export default RecordList;
