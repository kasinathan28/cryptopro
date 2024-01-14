// Loader.js

import React from 'react';
import style from './Loader.module.css';

function Loader() {
  return (
    <div className={style.loaderContainer}>
      <div className={style.loader}></div>
    </div>
  );
}

export default Loader;
