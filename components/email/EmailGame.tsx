import React, {useEffect, useState} from 'react';
import EmailFinish from '@/components/email/EmailFinish';

import emails from './emails.json'

type Stat = {
  accuracy: string
  time: number
  cpm: number
  wpm: number
  errors: number
}

const EmailGame = ({setIsActive}: { setIsActive: (active: boolean) => void }) => {
  // start game
  const [startTime, setStartTime] = useState<Date | null>(null)
  const [email, setEmail] = useState(['meow'])

  // in progress game
  const [typedCharacters, setTypedCharacters] = useState(0)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [input, setInput] = useState('')
  const [correctInput, setCorrectInput] = useState('')
  const [isCorrect, setIsCorrect] = useState(true)

  // finish game
  const [stat, setStat] = useState<Stat | null>(null)

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  }

  const startGame = () => {
    const emailIndex = getRandomInt(emails.length)
    // filter and map in case if there are extra spaces
    const formattedEmail = emails[emailIndex].trim().split(' ').map(word => word.trim()).filter(word => !!word)
    setEmail(formattedEmail)

    setTypedCharacters(0)
    setStartTime(null)
    setStat(null)
  }

  useEffect(() => {
    startGame()
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!startTime) setStartTime(new Date())

    const value = e.target.value
    const currentWord = email[currentWordIndex]

    if (value.length > input.length) {
      setTypedCharacters(state => state + 1)
    }

    if (currentWord === value.trim() && currentWord !== value) {
      setCurrentWordIndex(currentWordIndex + 1)
      setInput('')
      setCorrectInput('')
    } else if (value !== input) {
      setInput(value)
      if (currentWord.startsWith(value)) {
        setIsCorrect(true)
        setCorrectInput(value)
      } else {
        setIsCorrect(false)
      }
    }

    if (value === currentWord && currentWordIndex === email.length - 1) {
      endGame()
    }
  }

  const onFocus = () => {
    setIsActive(true)
  }
  const onBlur = () => setIsActive(false)

  const recordStat = () => {
    const emailLength = email.join(' ').length - 1
    const time = ((new Date()).getTime() - startTime!.getTime()) / 1000
    const errors = typedCharacters - emailLength
    const accuracy = ((emailLength / typedCharacters) * 100).toFixed(2)
    const cpm = Math.round(((typedCharacters / time) * 60));
    const wpm = Math.round((((typedCharacters / 5) / time) * 60));
    setStat({time, errors, cpm, wpm, accuracy})

    let stats = []
    const lsStats = localStorage.getItem('stats')
    if (lsStats) {
      stats = JSON.parse(lsStats)
    }
    stats.push({wpm, cpm, accuracy, date: new Date()})
    stats.sort((a: Stat, b: Stat) => a.cpm > b.cpm ? -1 : 1)
    localStorage.setItem('stats', JSON.stringify(stats.slice(0, 10)))
  }

  const endGame = () => {
    recordStat()

    setIsActive(false)
    setInput('')
    setCorrectInput('')
    setCurrentWordIndex(0)
  }

  if (stat) return (
    <EmailFinish
      stat={stat}
      onRestart={startGame}
    />
  )

  return (
    <>
      <div className='p-16'>
        <p>
          {!!currentWordIndex && email.slice(0, currentWordIndex).map((word, index) => (
            <span key={`${word}${index}`} className={`${index < currentWordIndex && 'text-success-500'}`}>{word} </span>
          ))}
          <span>
            <span className='underline font-bold text-success-500'>
              {email[currentWordIndex].slice(0, correctInput.length)}
            </span>
            <span className='underline font-bold text-surface-50 bg-error-500'>
              {email[currentWordIndex].slice(correctInput.length, input.length)}
            </span>
            <span className='underline font-bold'>
              {email[currentWordIndex].slice(input.length)}
            </span>
          </span>
          {email.slice(currentWordIndex + 1).map((word, index) => (
            <span key={`${word}${index}`}> {word}</span>
          ))}
        </p>
      </div>
      <input
        autoFocus
        className={`mt-auto border-t-2 border-surface-900 px-16 py-8 w-full focus:outline-none ${!isCorrect && 'text-error-500'}`}
        onFocus={onFocus}
        onBlur={onBlur}
        value={input}
        onChange={onChange}
      />
    </>
  )
}

export default EmailGame