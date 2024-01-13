import React from 'react'
import Container from '../components/container/container'
import style from "./mainContainer.module.css"

function MainContainer() {
  return (
    <div>
        <div className={style.main}>
            <Container></Container>
        </div>
        </div>
  )
}

export default MainContainer
