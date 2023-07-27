import PropTypes from 'prop-types';

import Form from './Filter.styled';

function Filter({ value, onChange }) {
  return (
    <Form>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </Form>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Filter;
