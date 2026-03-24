import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Пошук за автором або текстом..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
