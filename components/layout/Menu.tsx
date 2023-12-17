import Tooltip from "@/components/Tooltip";
import Image from "next/image";
import React from "react";

export type windowsType = 'email' | 'catibor' | 'statistic' | 'help'

type MenuProps = {
  onOpen: (name: windowsType) => () => void
}

const Menu = ({onOpen}: MenuProps) => {

  return (
    <footer className='fixed bottom-0 left-0 right-0 border-t-2 z-10 bg-surface-50'>
      <div className='container flex justify-center gap-16 h-40'>
        <Tooltip text='Catibor'>
          <button
            onClick={onOpen('catibor')}
            className='flex items-center justify-center relative group w-40 h-40 hover:text-primary'>
            <Image
              className='w-36 h-36 group-hover:opacity-0'
              src='/typing-animation/catibor.png'
              alt=''
              width={80}
              height={80}
            />
            <Image
              className='filter w-36 h-36 absolute opacity-0 group-hover:opacity-100'
              src='/typing-animation/catibor_hover.png'
              alt=''
              width={80}
              height={80}
            />
          </button>
        </Tooltip>
        <Tooltip text='Email'>
          <button
            onClick={onOpen('email')}
            className='flex items-center justify-center relative group w-40 h-40 hover:text-primary'>
            <Image
              className='w-36 h-36 group-hover:opacity-0'
              src='/typing-animation/email.png'
              alt=''
              width={80}
              height={80}
            />
            <Image
              className='filter w-36 h-36 absolute opacity-0 group-hover:opacity-100'
              src='/typing-animation/email_hover.png'
              alt=''
              width={80}
              height={80}
            />
          </button>
        </Tooltip>
        <Tooltip text='Stats'>
          <button
            onClick={onOpen('statistic')}
            className='flex items-center justify-center relative group w-40 h-40 hover:text-primary'>
            <Image
              className='w-36 h-36 group-hover:opacity-0'
              src='/typing-animation/stats.png'
              alt=''
              width={80}
              height={80}
            />
            <Image
              className='filter w-36 h-36 absolute opacity-0 group-hover:opacity-100'
              src='/typing-animation/stats_hover.png'
              alt=''
              width={80}
              height={80}
            />
          </button>
        </Tooltip>
        <Tooltip text='Help'>
          <button
            onClick={onOpen('help')}
            className='flex items-center justify-center relative group w-40 h-40 hover:text-primary'>
            <Image
              className='w-36 h-36 group-hover:opacity-0'
              src='/typing-animation/help.png'
              alt=''
              width={80}
              height={80}
            />
            <Image
              className='filter w-36 h-36 absolute opacity-0 group-hover:opacity-100'
              src='/typing-animation/help_hover.png'
              alt=''
              width={80}
              height={80}
            />
          </button>
        </Tooltip>
      </div>
    </footer>
  )
}

export default Menu
