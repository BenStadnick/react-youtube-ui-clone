import React, {useState} from 'react';
import { Paper, TextField } from '@material-ui/core';

const SearchBar = ({onFormSubmit, defaultSearchTerm}) => {
  const [searchTerm, setSearchTerm] = useState(defaultSearchTerm);

  const handleChange = event => setSearchTerm(event.target.value);
  
  const handleSubmit = (event) => {
    onFormSubmit(searchTerm);

    event.preventDefault();
  }

  return (
    <Paper elevation={6} style={{ padding: '25px' }}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Search..." value={searchTerm} onChange={handleChange} />
      </form>
    </Paper>
  );
}

export default SearchBar;