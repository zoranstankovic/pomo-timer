import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

import { Header } from './components/Header'
import { Pomodoro } from './components/Pomodoro'

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <Container>
          <Pomodoro />
        </Container>
      </main>
    </>
  )
}

export default App
