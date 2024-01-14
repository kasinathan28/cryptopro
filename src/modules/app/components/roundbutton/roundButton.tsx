// roundButton.tsx

import React from 'react';
import styles from './roundButton.module.css';

interface RoundButtonProps {
  buttonText: string;
  onClick?: () => void; // Optional onClick prop
}

const RoundButton: React.FC<RoundButtonProps> = ({ buttonText, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default RoundButton;
