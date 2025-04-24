import React from 'react';
import { CiSearch } from 'react-icons/ci'; 
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.inputWrapper}>
        <CiSearch className={styles.icon} /> 
        <input
          type="text"
          placeholder="Find your character..."
          onChange={handleInputChange}
          className={styles.input}
        />
      </div>
    </div>
  );
}
