import React from 'react'

import { action, computed, makeObservable, observable } from 'mobx'
import dayjs from 'dayjs'

export class AppModel {
  endTime = dayjs().add(2, 'hours')
  timeLeft: number = dayjs(this.endTime).diff(dayjs())

  constructor() {
    makeObservable(this, {
      timeLeft: observable,
      tick: action,
    })

    this.tick()
  }

  tick() {
    this.timeLeft = dayjs(this.endTime).diff(dayjs())

    requestAnimationFrame(() => setTimeout(() => this.tick(), 0))
  }

  get microseconds() {
    const left = this.timeLeft % 1000
    if (left < 10) return `00${left}`
    if (left < 100) return `0${left}`

    return left
  }

  get seconds() {
    return Math.floor(this.timeLeft / 1000)
  }

  get secondsLeft() {
    return this.seconds % 60
  }

  get minutes() {
    return (this.seconds - this.secondsLeft) / 60
  }

  get minutesLeft() {
    return this.minutes % 60
  }

  get hours() {
    return (this.minutes - this.minutesLeft) / 60
  }
}
