import React from 'react'
import { AppViewModel, AppViewModelContext } from './AppViewModel'

import { GlobalFonts } from '../styles/global'
import { App } from './App'

export const AppProvider = () => {
  const appViewModel = new AppViewModel()

  return (
    <AppViewModelContext.Provider value={appViewModel}>
      <GlobalFonts />
      <App />
    </AppViewModelContext.Provider>
  )
}
