import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import { AppViewModelContext } from '../../AppViewModel'

import { Digit } from '../Digit'

const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #000000;
`

export const Countdown = observer(() => {
  const appViewModel = useContext(AppViewModelContext)

  return (
    <CountdownContainer>
      <Digit>{appViewModel.hours}</Digit>
      <Digit>:</Digit>
      <Digit>{appViewModel.minutes}</Digit>
      <Digit>:</Digit>
      <Digit>{appViewModel.seconds}</Digit>
      <Digit>.</Digit>
      <Digit>{appViewModel.microseconds}</Digit>
    </CountdownContainer>
  )
})
