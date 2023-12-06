import React, {useState} from "react";
import EmailFinish from "@/_components/email/EmailFinish.tsx";

const EmailGame = ({ setIsActive }: {setIsActive: (active: boolean) => void}) => {
  const [startTime, setStartTime] = useState<Date | null>(null)
  const [time, setTime] = useState(0)

  const [typedCharacters, setTypedCharacters] = useState(0)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [input, setInput] = useState('')
  const [correctInput, setCorrectInput] = useState('')
  const [isCorrect, setIsCorrect] = useState(true)

  const quote = 'meow meow meow'.split(' ')

  const startGame = () => {
    setInput('')
    setCurrentWordIndex(0)
    setTypedCharacters(0)
    setStartTime(null)
    setTime(0)
  }

  const endGame = () => {
    if (startTime) {
      setTime(((new Date()).getTime() - startTime.getTime()) / 1000)
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!startTime) setStartTime(new Date())
    const value = e.target.value.trim()
    if (value !== input) {
      if (value.length > input.length) {
        setTypedCharacters(typedCharacters + 1)
      }
      setInput(value)
      if (quote[currentWordIndex].startsWith(value)) {
        setIsCorrect(true)
        setCorrectInput(value)
      } else {
        setIsCorrect(false)
      }
    }
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code.toLowerCase() === 'space' && input === quote[currentWordIndex]) {
      if (currentWordIndex + 1 === quote.length) {
        endGame()
      }
      setCurrentWordIndex(currentWordIndex + 1)
      setInput('')
      setCorrectInput('')
    }
  }

  const errors = typedCharacters - quote.join('').length
  const accuracy = Math.round((quote.join('').length / typedCharacters) * 100)
  const cpm = Math.round(((typedCharacters / time) * 60));
  const wpm = Math.round((((typedCharacters / 5) / time) * 60));

  const onFocus = () => {
    startGame()
    setIsActive(true)
  }
  const onBlur = () => setIsActive(false)

  if (time) return (
    <EmailFinish
      time={time}
      accuracy={accuracy}
      onRestart={startGame}
      wpm={wpm}
      cpm={cpm}
      errors={errors}
    />
  )

  return (
    <>
      <div className='p-16'>
        <p>
          {quote.map((word, index) => {

            if (index === currentWordIndex) {
              return (
                <span key={`${word}${index}`}>
                  <span className='underline font-bold text-success-500'>
                    {word.slice(0, correctInput.length)}
                  </span>
                  <span className='underline font-bold text-surface-50 bg-error-500'>
                    {word.slice(correctInput.length, input.length)}
                  </span>
                  <span className='underline font-bold'>
                    {word.slice(input.length)}
                  </span>
                </span>
              )
            }

            return (<span key={`${word}${index}`} className={`${index < currentWordIndex && 'text-success-500'}`}> {word} </span>)
          })}
        </p>
      </div>
      <input
        autoFocus
        className='mt-auto border-t-2 px-16 py-8 w-full focus:outline-none'
        onFocus={onFocus}
        onBlur={onBlur}
        value={input}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </>
  )
} 

export default EmailGame