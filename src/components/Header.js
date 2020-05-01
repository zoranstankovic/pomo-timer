import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

export function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h3">Pomo Timer</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
