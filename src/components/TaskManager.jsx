import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addRecord,
  toggleStatus,
  setFilter,
  deleteRecord,
  editRecord,
} from '../store/actions/recordActions';
import {
  selectFilteredRecords,
  selectCompletedCount,
  selectUncompletedCount,
} from '../store/selectors/recordSelectors';
import AddRecordForm from './AddRecordForm';
import FilterSelect from './FilterSelect';
import RecordList from './RecordList';

const TaskManager = () => {
  const [filter, setFilterState] = useState('all');
  const dispatch = useDispatch();
  const records = useSelector(selectFilteredRecords);
  const completedCount = useSelector(selectCompletedCount);
  const uncompletedCount = useSelector(selectUncompletedCount);

  const maxLength = 20; 

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
    dispatch(addRecord(storedRecords)); 
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('records', JSON.stringify(records));
  }, [records]);

  const handleAddRecord = (record) => {
    dispatch(addRecord([record])); 
  };

  const handleToggleStatus = (id) => {
    dispatch(toggleStatus(id));
  };

  const handleSetFilter = (selectedFilter) => {
    setFilterState(selectedFilter);
    dispatch(setFilter(selectedFilter));
  };

  const handleDeleteRecord = (id) => {
    dispatch(deleteRecord(id));
  };

  const handleEditRecord = (updatedRecord) => {
    dispatch(editRecord(updatedRecord));
  };

  return (
    <div className="task-manager-page">
      <h1>Task Manager</h1>
      <div className="task-counters">
        <div className='counter-item'>
          <span>{completedCount}</span>
          <p>Completed</p>
        </div>
        <div className='counter-item'>
          <span>{uncompletedCount}</span>
          <p>Uncompleted</p>
        </div>
      </div>
      <FilterSelect filter={filter} setFilter={handleSetFilter} />
      <RecordList
        records={records}
        toggleStatus={handleToggleStatus}
        deleteRecord={handleDeleteRecord}
        editRecord={handleEditRecord}
      />
      <AddRecordForm addRecord={handleAddRecord} maxLength={maxLength} />
    </div>
  );
};

export default TaskManager;
