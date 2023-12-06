import {useEffect, useState} from "react";
import Body from './body.png'
import Table from './table.png'
import LeftDown from './left_down.png'
import Left from './left_up.png'
import RightDown from './right_down.png'
import Right from './right_up.png'

const LEFT_PAW = ['q','w','e','r','t','a','s','d','f','g','z','x','c','v','b','backquote', '1','2','3','4','5', 'space']
const RIGHT_PAW = ['y','u','i','o','p','bracketleft','bracketright','h','j','k','l','semicolon', 'quote','n','m','comma','period','slash','6','7','8','9','0','minus','equal', 'backspace', 'space']

const getKey = (event: KeyboardEvent) => {
  return event.code.toLowerCase().replace('key', '').replace('digit', '')
}

type CatiborAnimationProps = {
  className?: string
  active: boolean
}

const CatiborAnimation = ({ className = '', active }: CatiborAnimationProps) => {
  const [leftPaw, setLeftPaw] = useState(0)
  const [rightPaw, setRightPaw] = useState(0)
  let left = 0
  let right = 0
  let pressed: {[key:string]: boolean} = {}

  const onKeyDown = (event: KeyboardEvent) => {
    // console.log(event)
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
    if (!pressed[key] ) return;

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
    document.removeEventListener("keydown", onKeyDown);
    document.removeEventListener("keyup", onKeyUp);

    left = 0
    right = 0
    setRightPaw(0)
    setLeftPaw(0)
    pressed = {}
  }

  useEffect(() => {
    if (active) {
      document.addEventListener("keydown", onKeyDown);
      document.addEventListener("keyup", onKeyUp);
    } else {
      removeListeners()
    }

    return () => {
      removeListeners()
    }
  }, [active]);

  return (
    <div className={className}>
      <div className='relative flex justify-end items-end'>
        <img className='max-h-full' src={Table} alt=''/>
        <img className={`absolute bottom-0 right-0 max-h-full ${rightPaw ? 'opacity-0' : 'opacity-100'}`} src={Right} alt=''/>
        <img className={`absolute bottom-0 right-0 max-h-full ${!rightPaw ? 'opacity-0' : 'opacity-100'}`} src={RightDown} alt=''/>
        <img className='absolute bottom-0 right-0 max-h-full' src={Body} alt=''/>
        <img className={`absolute bottom-0 right-0 max-h-full ${leftPaw ? 'opacity-0' : 'opacity-100'}`} src={Left} alt=''/>
        <img className={`absolute bottom-0 right-0 max-h-full ${!leftPaw ? 'opacity-0' : 'opacity-100'}`} src={LeftDown} alt=''/>
      </div>
    </div>
  )
}

export default CatiborAnimation