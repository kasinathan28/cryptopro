import React from 'react'
import style from "./logOutbutton.module.css"

export default function LogOutButton() {

  return (
    <div>
        <button type="button" className={style.button}>Logout</button>
    </div>
  )
}
