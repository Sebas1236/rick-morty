import React, { useRef } from 'react';
import styles from './CharacterPage.module.css';
import SearchBar from './SearchBar';
import SelectedCharacter from './SelectedCharacter';
import CharacterGrid from './CharacterGrid';
import { IoIosArrowUp } from 'react-icons/io'; 
import { Character } from '@/types/types';

interface CharacterPageProps {
  characters: Character[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  likedCharacters: number[];
  handleLike: (id: number) => void;
  selectedCharacter: Character | null;
  handleSelectCharacter: (character: Character) => void;
}

export default function CharacterPage({
  characters,
  searchQuery,
  setSearchQuery,
  likedCharacters,
  handleLike,
  selectedCharacter,
  handleSelectCharacter,
}: CharacterPageProps) {
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const contentRef = useRef<HTMLDivElement>(null);

  const scrollUp = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({ top: -100, behavior: 'smooth' });
    }
  };

  const scrollDown = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({ top: 100, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.centralPage}>
        <div className={styles.scrollButtons}>
          <button className={styles.scrollButton} onClick={scrollUp}>
            <IoIosArrowUp className={styles.icon} />
          </button>
          <button className={`${styles.scrollButton} ${styles.downButton}`} onClick={scrollDown}>
            <IoIosArrowUp className={styles.icon} style={{ transform: 'rotate(180deg)' }} />
          </button>
        </div>
        <div className={styles.content} ref={contentRef}>
          <SelectedCharacter selectedCharacter={selectedCharacter} />
          <div className={styles.rightColumn}>
            <SearchBar onSearch={setSearchQuery} />
            <CharacterGrid
              characters={filteredCharacters}
              likedCharacters={likedCharacters}
              handleLike={handleLike}
              handleSelectCharacter={handleSelectCharacter}
              selectedCharacter={selectedCharacter}
            />
          </div>
        </div>
      </div>
    </div>
  );
}