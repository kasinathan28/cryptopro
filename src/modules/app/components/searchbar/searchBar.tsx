import React from 'react'
import style from "./searchBar.module.css"


export default function SearchBar() {
  return (
    <div>
        <input className={style.input} type="search" placeholder="Search....."/>
    </div>
  )
}

