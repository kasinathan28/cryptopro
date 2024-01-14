import React from 'react'
import style from "./buybutton.module.css"
function BuyButton() {
  return (
    <div>
        <div>
            <button type="button" className={style.button}>Buy Now</button>
        </div>
    </div>
  )
}

export default BuyButton