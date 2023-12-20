import Tooltip from "@/components/Tooltip";
import Image from "next/image";
import React, {useEffect, useState} from "react";

export type windowsType = 'email' | 'catibor' | 'statistic' | 'help'

type MenuProps = {
  onOpen: (name: windowsType) => () => void
}

const Menu = ({onOpen}: MenuProps) => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  function calculateTime() {
    const today = new Date();
    setTime(today.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}))
    setDate(today.toLocaleDateString('en-GB'))
  }

  useEffect(() => {
    calculateTime()
    setInterval(() => {
      calculateTime()
    }, 5000)
  }, []);


  return (
    <footer className='fixed bottom-0 left-0 right-0 border-t-2 z-10 bg-surface-50'>
      <div className='container flex justify-center gap-16 h-40 relative items-center'>
        <Tooltip text='Catibor'>
          <button
            onClick={onOpen('catibor')}
            aria-label='Catibor'
            className='flex items-center justify-center relative group w-36 h-36'>
            <Image
              className='select-none w-32 h-32 group-hover:opacity-0 group-focus:opacity-0'
              src='/menu/catibor.png'
              alt=''
              width={80}
              height={80}
            />
            <Image
              className='filter select-none w-32 h-32 absolute opacity-0 group-hover:opacity-100 group-focus:opacity-100'
              src='/menu/catibor_hover.png'
              alt=''
              width={80}
              height={80}
            />
          </button>
        </Tooltip>
        <Tooltip text='Email'>
          <button
            onClick={onOpen('email')}
            aria-label='Email'
            className='flex items-center justify-center relative group w-36 h-36'>
            <Image
              className='select-none w-32 h-32 group-hover:opacity-0 group-focus:opacity-0'
              src='/menu/email.png'
              alt=''
              width={80}
              height={80}
            />
            <Image
              className='filter select-none w-32 h-32 absolute opacity-0 group-hover:opacity-100 group-focus:opacity-100'
              src='/menu/email_hover.png'
              alt=''
              width={80}
              height={80}
            />
          </button>
        </Tooltip>
        <Tooltip text='Stats'>
          <button
            onClick={onOpen('statistic')}
            aria-label='Statistics'
            className='flex items-center justify-center relative group w-36 h-36'>
            <Image
              className='select-none w-32 h-32 group-hover:opacity-0 group-focus:opacity-0'
              src='/menu/stats.png'
              alt=''
              width={80}
              height={80}
            />
            <Image
              className='filter select-none w-32 h-32 absolute opacity-0 group-hover:opacity-100 group-focus:opacity-100'
              src='/menu/stats_hover.png'
              alt=''
              width={80}
              height={80}
            />
          </button>
        </Tooltip>
        <Tooltip text='Help'>
          <button
            onClick={onOpen('help')}
            aria-label='Help'
            className='flex items-center justify-center relative group w-36 h-36'>
            <Image
              className='select-none w-32 h-32 group-hover:opacity-0 group-focus:opacity-0'
              src='/menu/help.png'
              alt=''
              width={80}
              height={80}
            />
            <Image
              className='filter select-none w-32 h-32 absolute opacity-0 group-hover:opacity-100 group-focus:opacity-100'
              src='/menu/help_hover.png'
              alt=''
              width={80}
              height={80}
            />
          </button>
        </Tooltip>

        <div className='absolute top-1/2 -translate-y-1/2 right-32 flex gap-12'>
          {/*<button className='p-4 text-14 hover:text-primary focus:text-primary'>ENG</button>*/}
          <div className='flex justify-center items-end flex-col'>
            <p className='text-12 leading-100 mb-4'>{time}</p>
            <p className='text-12 leading-100'>{date}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Menu
