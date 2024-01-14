import React from "react";
import style from "./quatue.module.css";
import RoundButton from "@/modules/app/components/roundbutton/roundButton";
import BuyButton from "@/modules/app/components/buyButton/buyButton";

export default function Quatue() {
  return (
    <div>
      <div className={style.main}>
        <div>

        <h1 className={style.h1}>Become a member and grow together</h1>
        </div>
        <div className={style.div1}>
          <h2>Analyze the graph and buy as you need</h2>
        </div>
        <BuyButton></BuyButton>
      </div>
      
    </div>
  );
}
