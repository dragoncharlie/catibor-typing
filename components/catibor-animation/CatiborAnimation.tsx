import React, {useEffect, useState} from 'react';
import Image from 'next/image'

const LEFT_PAW = ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b', 'backquote', '1', '2', '3', '4', '5', 'space']
const RIGHT_PAW = ['y', 'u', 'i', 'o', 'p', 'bracketleft', 'bracketright', 'h', 'j', 'k', 'l', 'semicolon', 'quote', 'n', 'm', 'comma', 'period', 'slash', '6', '7', '8', '9', '0', 'minus', 'equal', 'backspace', 'space']

const getKey = (event: KeyboardEvent) => {
  return event.code.toLowerCase().replace('key', '').replace('digit', '')
}

type CatiborAnimationProps = {
  type: string
}

const imageClassName = 'absolute bottom-0 right-0 max-h-full object-right-bottom object-contain'

const CatiborAnimation = ({type}: CatiborAnimationProps) => {
  const [leftPaw, setLeftPaw] = useState(0)
  const [rightPaw, setRightPaw] = useState(0)
  let left = 0
  let right = 0
  let pressed: { [key: string]: boolean } = {}

  const onKeyDown = (event: KeyboardEvent) => {
    const key = getKey(event)
    if (pressed[key]) return

    pressed[key] = true
    if (RIGHT_PAW.includes(key)) {
      right++
      setRightPaw(right)
    }
    if (LEFT_PAW.includes(key)) {
      left++
      setLeftPaw(left)
    }
  }

  const onKeyUp = (event: KeyboardEvent) => {
    const key = getKey(event)
    if (!pressed[key]) return;

    pressed[key] = false;
    if (RIGHT_PAW.includes(key)) {
      right--
      setRightPaw(right)
    }
    if (LEFT_PAW.includes(key)) {
      left--
      setLeftPaw(left)
    }
  }

  const removeListeners = () => {
    document.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('keyup', onKeyUp);

    left = 0
    right = 0
    setRightPaw(0)
    setLeftPaw(0)
    pressed = {}
  }

  useEffect(() => {
    if (type === 'typing') {
      document.addEventListener('keydown', onKeyDown);
      document.addEventListener('keyup', onKeyUp);
    } else {
      removeListeners()
    }

    return () => {
      removeListeners()
    }
  }, [type]);

  const isFinish = type === 'finish'

  return (
    <div className='border-2 absolute bottom-0 right-0 max-w-[740px] w-[calc(100%_-_32px)] max-h-[calc(100vh_-_56px_-_56px_-_32px)] overflow-hidden flex flex-col'>
      <div className='border-b-2 w-full top-0 left-0 text-12 px-16 py-4 h-52 flex items-center shrink-0'>
        <p>
          catibor.exe
          {isFinish && <span className='ml-4'>(not working)</span>}
        </p>
        <button className='button absolute top-8 right-8 w-32 h-32 min-w-0 p-0 text-16'>
          X
        </button>
      </div>
      <div className='pointer-events-none z-0 max-h-full grow relative flex justify-end items-end select-none'>
        <Image
          className='max-h-full object-right-bottom object-contain'
          src='/typing-animation/table.png'
          alt=''
          width={736}
          height={496}/>
        <Image
          className={`${imageClassName} ${!isFinish ? 'opacity-0' : 'opacity-100'}`}
          src='/typing-animation/sleep.png'
          alt=''
          width={701}
          height={496}/>
        <Image
          className={`${imageClassName} ${(rightPaw || isFinish) ? 'opacity-0' : 'opacity-100'}`}
          src='/typing-animation/right_up.png'
          alt=''
          width={701}
          height={496}/>
        <Image
          className={`${imageClassName} ${(!rightPaw || isFinish) ? 'opacity-0' : 'opacity-100'}`}
          src='/typing-animation/right_down.png'
          alt=''
          width={701}
          height={496}/>
        <Image
          className={`${imageClassName} ${isFinish ? 'opacity-0' : 'opacity-100'}`}
          src='/typing-animation/body.png'
          alt=''
          width={701}
          height={496}/>
        <Image
          className={`${imageClassName} ${(leftPaw || isFinish) ? 'opacity-0' : 'opacity-100'}`}
          src='/typing-animation/left_up.png'
          alt=''
          width={701}
          height={496}/>
        <Image
          className={`${imageClassName} ${(!leftPaw || isFinish) ? 'opacity-0' : 'opacity-100'}`}
          src='/typing-animation/left_down.png'
          alt=''
          width={701}
          height={496}/>
        <Image
          className={`${imageClassName} ${isFinish ? 'opacity-0' : 'opacity-100'}`}
          src='/typing-animation/whiskers.png'
          alt=''
          width={701}
          height={496}/>
      </div>
    </div>
  )
}

export default CatiborAnimation