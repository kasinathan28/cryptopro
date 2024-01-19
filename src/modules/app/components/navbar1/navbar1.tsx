import React from "react";
import style from "../navbar/navbar.module.css";
import Logo from "../images/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import LogOutButton from "../logoutbutton/logOutButton";
export default function Navbar1() {
  const router = useRouter();

  const handleProfile = () => {
    router.push("/profile");
  };

  const handleBack = () => {
    history.back();
  
}


  const isDashBoard = router.pathname.includes("/dashboard");
  const isProfile = router.pathname.includes("/profile");

  return (
    <div>
      <div className={style.navbar}>
        <div>
            {isProfile &&(
                <FontAwesomeIcon 
                className={style.backButton}
                size="2x"
                icon={faArrowCircleLeft}
                onClick={handleBack}
                />
            )}
            
        </div>
        <Image src={Logo} className={style.img} alt="Logo" />
        <h1 className={style.h1}>CoinGecko</h1>
        <div className={style.bar}></div>
        <div className={style.right}>
          { isDashBoard && (
            <FontAwesomeIcon
              className={style.icon}
              size="2x"
              color="#fff"
              icon={faCog}
              onClick={handleProfile}
            />
          )}

          {isProfile && (
            <LogOutButton></LogOutButton>
          )}
        </div>
      </div>

      <div className={style.list_container}></div>
    </div>
  );
}
