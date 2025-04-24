import React, { useRef, useState } from 'react';
import CharacterCard from './CharacterCard';
import styles from './CharacterPage.module.css';
import { IoIosArrowUp } from 'react-icons/io';
import { Character } from '@/types/types';

interface CharacterGridProps {
  characters: Character[];
  likedCharacters: number[];
  handleLike: (id: number) => void;
  handleSelectCharacter: (character: Character) => void;
  selectedCharacter: Character | null; 
}

export default function CharacterGrid({
  characters,
  likedCharacters,
  handleLike,
  handleSelectCharacter,
  selectedCharacter,
}: CharacterGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout | null>(null);
  const [showFavorites, setShowFavorites] = useState(false);

  const scroll = (direction: 'up' | 'down') => {
    if (gridRef.current) {
      const scrollAmount = direction === 'up' ? -10 : 10; 
      gridRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    }
  };

  const startScrolling = (direction: 'up' | 'down') => {
    stopScrolling(); 
    const interval = setInterval(() => scroll(direction), 10); 
    setScrollInterval(interval);
  };

  const stopScrolling = () => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      setScrollInterval(null);
    }
  };

  const toggleFavorites = () => {
    setShowFavorites((prev) => !prev);
  };

  const displayedCharacters = showFavorites
    ? characters.filter((character) => likedCharacters.includes(character.id))
    : characters;

  return (
    <div className={styles.characterGridContainer}>
      <div className={styles.scrollButtons}>
        <button
          className={styles.scrollButton}
          onMouseDown={() => startScrolling('up')}
          onMouseUp={stopScrolling}
          onMouseLeave={stopScrolling} 
        >
          <IoIosArrowUp className={styles.icon} />
        </button>
        <button
          className={`${styles.scrollButton} ${styles.downButton}`}
          onMouseDown={() => startScrolling('down')}
          onMouseUp={stopScrolling}
          onMouseLeave={stopScrolling} 
        >
          <IoIosArrowUp
            className={styles.icon}
            style={{ transform: 'rotate(180deg)' }}
          />
        </button>
      </div>
      <button className={styles.favsButton} onClick={toggleFavorites}>
        {showFavorites ? 'ALL' : 'FAVS'}
      </button>
      <div className={styles.characterGrid} ref={gridRef}>
        {displayedCharacters.map((character) => (
          <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            onLike={handleLike}
            isLiked={likedCharacters.includes(character.id)}
            onSelect={() => handleSelectCharacter(character)}
            isSelected={character.id === selectedCharacter?.id} 
          />
        ))}
      </div>
    </div>
  );
}