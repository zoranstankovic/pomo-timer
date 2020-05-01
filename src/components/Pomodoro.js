import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

import { makeStyles } from '@material-ui/core/styles'

import { formatTime } from '../util/helpers'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

export function Pomodoro() {
  const classes = useStyles()
  const [status, setStatus] = React.useState('pomodoro')
  const [timer, setTimer] = React.useState(25 * 60)
  const [start, setStart] = React.useState(false)

  React.useEffect(() => {
    const startTimer = setInterval(() => {
      // todo: fix this issue with -1 showing
      if (timer <= 1) {
        // play sound
        setTimer(0)
        setStart(false)
      }
      if (start) {
        setTimer((seconds) => seconds - 1)
      } else {
        clearInterval(startTimer)
      }
    }, 1000)
    return () => {
      clearInterval(startTimer)
    }
  }, [start, timer])

  function handleStart() {
    setStart((start) => !start)
  }

  function handleReset() {
    if (status === 'pomodoro') {
      setTimer(25 * 60)
      setStart(false)
    } else if (status === 'shortBreak') {
      setTimer(0.5 * 60)
      setStart(false)
    } else if (status === 'longBreak') {
      setTimer(15 * 60)
      setStart(false)
    }
  }

  function handlePomodoro() {
    setStatus('pomodoro')
    setTimer(25 * 60)
    setStart(false)
  }

  function handleShortBreak() {
    setStatus('shortBreak')
    setTimer(0.5 * 60)
    setStart(false)
  }

  function handleLongBreak() {
    setStatus('longBreak')
    setTimer(15 * 60)
    setStart(false)
  }

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <div className={classes.buttonGroup}>
          <ButtonGroup
            variant="outlined"
            color="primary"
            aria-label="contained primary button group"
          >
            <Button
              status="pomodoro"
              onClick={handlePomodoro}
              color="secondary"
              variant="contained"
            >
              Pomodoro
            </Button>
            <Button onClick={handleShortBreak}>Short Break</Button>
            <Button onClick={handleLongBreak}>Long Break</Button>
          </ButtonGroup>
        </div>
        <Typography
          variant="h1"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {formatTime(timer)}
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button onClick={handleStart} variant="contained" color="primary">
                {start ? 'Pause' : 'Start'}
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={handleReset} variant="outlined" color="primary">
                Reset
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}
