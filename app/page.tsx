"use client";

import { Character } from '@/types/types';
import { fetchCharacters } from '../utils/api';
import { useEffect, useState } from 'react';
import CharacterPage from '@/components/CharacterPage';
import styles from './page.module.css';
import titleImage from '@/public/title.png'; // Adjust the path if necessary
import Image from 'next/image';

export default function HomePage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [likedCharacters, setLikedCharacters] = useState<number[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const charactersData = (await fetchCharacters()) || [];
        setCharacters(charactersData);
      } catch {
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLike = (id: number) => {
    setLikedCharacters((prev) =>
      prev.includes(id) ? prev.filter((charId) => charId !== id) : [...prev, id]
    );
  };

  const handleSelectCharacter = (character: Character) => {
    setSelectedCharacter(character);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.page}>
      <Image src={titleImage} alt="Title" className={styles.titleImage} />
      <CharacterPage
        characters={characters}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        likedCharacters={likedCharacters}
        handleLike={handleLike}
        selectedCharacter={selectedCharacter}
        handleSelectCharacter={handleSelectCharacter}
      />
      <footer className={styles.footer}>
        </footer>
    </div>
  );
}