import React from 'react';
import style from "./roundButton.module.css"
interface RoundButtonProps {
  buttonText: string;
}

function RoundButton({ buttonText }: RoundButtonProps) {
  return (
    <div>
      <button className={style.button}>{buttonText}</button>
    </div>
  );
}

export default RoundButton;
