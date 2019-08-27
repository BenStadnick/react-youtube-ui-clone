import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';

const SearchBar = ({onFormSubmit, defaultSearchTerm}) => {
  const [searchTerm, setSearchTerm] = useState(defaultSearchTerm);

  const handleChange = event => setSearchTerm(event.target.value);
  
  const handleSubmit = (event) => {
    onFormSubmit(searchTerm);
    event.preventDefault();
  }

  return (
    <div style={{ padding: '25px' }}>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Search: </Form.Label>
        <Form.Control type='text' placeholder='Search...' value={searchTerm} onChange={handleChange} />
      </Form>
    </div>
  );
}

export default SearchBar;