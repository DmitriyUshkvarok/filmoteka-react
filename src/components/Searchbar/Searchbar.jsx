import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Form, InputSearch, SerchBtn } from './Searchbar.styled';
import { useState } from 'react';

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      toast.error('Please, enter your name movie!');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputSearch
        name="query"
        value={query}
        type="text"
        autoComplete="off"
        placeholder="Enter the movie name"
        onChange={handleQueryChange}
      />
      <SerchBtn>Search</SerchBtn>
    </Form>
  );
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
