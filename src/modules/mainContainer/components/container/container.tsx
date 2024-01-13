import React from 'react'
import style from "./container.module.css"
import Card from '@/modules/app/components/cards/card'


export  default function Container() {
  return (
    <div>
        <div className={style.container}>
            <div className={style.contents}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            </div>
        </div>
    </div>
  )
}
