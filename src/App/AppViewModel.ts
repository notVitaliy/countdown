import React from 'react'
import { makeObservable } from 'mobx'

import { AppModel } from './AppModel'

export class AppViewModel {
  appModel = new AppModel()

  constructor() {
    makeObservable(this, {})
  }

  get microseconds() {
    return this.appModel.microseconds
  }

  get seconds() {
    return this.appModel.secondsLeft >= 10 ? this.appModel.secondsLeft : `0${this.appModel.secondsLeft}`
  }

  get minutes() {
    return this.appModel.minutesLeft > 10 ? this.appModel.minutesLeft : `0${this.appModel.minutesLeft}`
  }

  get hours() {
    return this.appModel.hours > 10 ? this.appModel.hours : `0${this.appModel.hours}`
  }
}

export const AppViewModelContext = React.createContext<AppViewModel>(null)
