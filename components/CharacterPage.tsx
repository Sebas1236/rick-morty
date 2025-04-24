import React from "react";
import styles from "./CharacterPage.module.css";
import SearchBar from "./SearchBar";
import SelectedCharacter from "./SelectedCharacter";
import CharacterGrid from "./CharacterGrid";
import { Character } from "@/types/types";

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

  return (
    <div className={styles.container}>
      <div className={styles.centralPage}>
        <div className={styles.content}>
          <div className={styles.selectedCharacter}>
            <button
              className={`${styles.statusButton} ${
                selectedCharacter?.status?.toUpperCase() === "DEAD"
                  ? styles.dead
                  : ""
              }`}
            >
              {selectedCharacter?.status?.toUpperCase()}
            </button>
            <SelectedCharacter selectedCharacter={selectedCharacter} />
          </div>
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