import PropTypes from 'prop-types';

const FilterSelect = ({ filter, setFilter }) => {
  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <div className="filter-select">
      <button
        className={filter === 'all' ? 'active' : ''}
        onClick={() => handleFilterChange('all')}
      >
        All
      </button>
      <button
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => handleFilterChange('completed')}
      >
        Completed
      </button>
      <button
        className={filter === 'current' ? 'active' : ''}
        onClick={() => handleFilterChange('current')}
      >
        Current
      </button>
    </div>
  );
};

FilterSelect.propTypes = {
  filter: PropTypes.oneOf(['all', 'completed', 'current']).isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default FilterSelect;
