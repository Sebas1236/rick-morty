import React from 'react';
import Image from 'next/image';
import styles from './CharacterPage.module.css';
import { Character } from '@/types/types';

interface SelectedCharacterProps {
  selectedCharacter: Character | null;
}

export default function SelectedCharacter({ selectedCharacter }: SelectedCharacterProps) {
  return (
    <div className={styles.selectedCharacter}>
      {selectedCharacter ? (
        <>
          <Image
            src={selectedCharacter.image}
            alt={selectedCharacter.name}
            className={styles.selectedCharacterImage}
            width={200}
            height={200}
          />
          <div className={styles.infoBox}>
            <div className={styles.topLeft}>
              <p className={styles.characterName}>{selectedCharacter.name}</p>
              <p>{selectedCharacter.species}</p>
              <p>{selectedCharacter.type || 'Unknown'}</p>
            </div>
            <div className={styles.bottomGrid}>
              <p className={styles.label}>Origin</p>
              <p className={styles.label}>Location</p>
              <p className={styles.label}>Gender</p>
              <p className={styles.label}>Episodes</p>
              <p>{selectedCharacter.origin.name}</p>
              <p>{selectedCharacter.location.name}</p>
              <p>{selectedCharacter.gender}</p>
              <p>{selectedCharacter.episode.length} Episodes</p>
            </div>
          </div>
        </>
      ) : (
        <p>Select a character to view details</p>
      )}
    </div>
  );
}
