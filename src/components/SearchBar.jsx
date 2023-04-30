import { Paper, TextField } from "@mui/material";
import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  let [searchTerm, setSearchTerm] = useState("");

  let handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(searchTerm);
    setSearchTerm("");
  };

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Search..."
          value={searchTerm}
          onChange={(e) => handleChange(e)}
        />
      </form>
    </Paper>
  );
};

export default SearchBar;
