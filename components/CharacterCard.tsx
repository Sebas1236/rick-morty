import React from "react";
import styles from "./CharacterCard.module.css";
import Image from "next/image";

interface CharacterCardProps {
  id: number;
  name: string;
  image: string;
  onLike: (id: number) => void;
  isLiked: boolean;
  onSelect: () => void; 
  isSelected?: boolean;
}

export default function CharacterCard({
  id,
  name,
  image,
  onLike,
  isLiked,
  onSelect, 
  isSelected = false, 
}: CharacterCardProps) {
  return (
    <div
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      onClick={onSelect}
    >
      {" "}
      <h6 className={styles.name}>{name.split(" ")[0].toUpperCase()}</h6>
      <Image
        src={image}
        alt={name}
        className={styles.image}
        width={200} 
        height={200} 
      />
      <div className={styles.details}>
        <button
          className={`${styles.likeButton} ${isLiked ? styles.liked : ""}`}
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering onSelect when clicking the button
            onLike(id);
          }}
        >
          {isLiked ? "❤️ Like" : "♡ Like"}
        </button>
      </div>
    </div>
  );
}
