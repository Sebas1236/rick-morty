import React from 'react';
import CharacterCard from './CharacterCard';
import styles from './CharacterPage.module.css';
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
  return (
    <div className={styles.characterGrid}>
      {characters.map((character) => (
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
  );
}