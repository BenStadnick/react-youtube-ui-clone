import React, {useState} from 'react';
import {Form, InputGroup, Button} from 'react-bootstrap';
import './SearchBar.css'

const SearchBar = ({onFormSubmit, defaultSearchTerm}) => {
  const [searchTerm, setSearchTerm] = useState(defaultSearchTerm);

  const handleChange = event => setSearchTerm(event.target.value);
  
  const handleSubmit = (event) => {
    onFormSubmit(searchTerm);
    event.preventDefault();
  }

  return (
    <div className='search_bar_container'>
      <Form onSubmit={handleSubmit}  className='search_bar_input'>
        <InputGroup>
          <Form.Control type='text' placeholder='Search...' value={searchTerm} onChange={handleChange} />
          <InputGroup.Append>
            <Button  variant="outline-primary" type='submit'>Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </div>
  );
}

export default SearchBar;