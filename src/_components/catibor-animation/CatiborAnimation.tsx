import {useEffect, useState} from "react";
import Body from './body.png'
import Table from './table.png'
import LeftDown from './left_down.png'
import LeftUp from './left_up.png'
import RightDown from './right_down.png'
import RightUp from './right_up.png'

const LEFT_PAW = ['q','w','e','r','t','a','s','d','f','g','z','x','c','v','b','1','2','3','4','5', ' ']
const RIGHT_PAW = ['y','u','i','o','p','[',']','h','j','k','l',';','n','m',',','.','/','6','7','8','9','0','-','=', ' ']

const CatiborAnimation = () => {
  const [isActive, setIsActive] = useState(false)
  const [leftPawUp, setLeftPawUp] = useState(true)
  const [rightPawUp, setRightPawUp] = useState(true)

  useEffect(() => {
    setIsActive(true)
  }, []);

  useEffect(() => {
    if (isActive) {
      document.addEventListener("keydown", (event) => {
        console.log('down', event)
        if (RIGHT_PAW.includes(event.key)) {
          setRightPawUp(false)
        }
        if (LEFT_PAW.includes(event.key)) {
          setLeftPawUp(false)
        }
      });
      document.addEventListener("keyup", (event) => {
        console.log('up', event)
        if (RIGHT_PAW.includes(event.key)) {
          setRightPawUp(true)
        }
        if (LEFT_PAW.includes(event.key)) {
          setLeftPawUp(true)
        }
      });
    }

    return () => {
      document.removeEventListener("keydown", (event) => {
        console.log('down', event)
      });
      document.removeEventListener("keyup", (event) => {
        console.log('up', event)
      });
    }
  }, [isActive]);

  return (
    <div className='relative'>
      <img src={Table} alt=''/>
      <img className={`absolute top-0 left-0 ${(rightPawUp ? 'opacity-100' : 'opacity-0')}`} src={RightUp} alt=''/>
      <img className={`absolute top-0 left-0 ${rightPawUp ? 'opacity-0' : 'opacity-100'}`} src={RightDown} alt=''/>
      <img className='absolute top-0 left-0' src={Body} alt=''/>
      <img className={`absolute top-0 left-0 ${(leftPawUp ? 'opacity-100' : 'opacity-0')}`} src={LeftUp} alt=''/>
      <img className={`absolute top-0 left-0 ${leftPawUp ? 'opacity-0' : 'opacity-100'}`} src={LeftDown} alt=''/>
    </div>
  )
}

export default CatiborAnimation