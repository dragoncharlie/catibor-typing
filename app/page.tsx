'use client'

import React, {useState} from 'react';
import CatiborWindow from '@/components/catibor/CatiborWindow';
import EmailWindow from '@/components/email/EmailWindow';
import StatisticsWindow from "@/components/statistic/StatisticsWindow";
import Tooltip from "@/components/Tooltip";
import HelpWindow from "@/components/help/HelpWindow";

type windowsType = 'email' | 'catibor' | 'statistic' | 'help'

const Home = () => {
  const [animationType, setAnimationType] = useState('default')
  // position in the array shows order of windows, the last one is the focused one
  const [openedWindows, setOpenedWindows] = useState<windowsType[]>(['catibor', 'email'])

  const onClose = (windowName: windowsType) => () => {
    setOpenedWindows(state => state.filter(name => name !== windowName))
  }

  const onOpen = (windowName: windowsType) => () => {
    setOpenedWindows(state => [...state.filter(name => name !== windowName), windowName])
  }

  const getLayer = (windowName: windowsType) => {
    const index = openedWindows.indexOf(windowName)
    switch (index) {
      case 1:
        return 'z-10'
      case 2:
        return 'z-20'
      case 3:
        return 'z-30'

      default:
        return 'z-0'
    }
  }

  return (
    <>
      <div className='flex flex-col grow m-auto w-full max-h-[720px] relative'>
        {openedWindows.includes('email') && (
          <EmailWindow
            layer={getLayer('email')}
            onFocus={onOpen('email')}
            setAnimationType={setAnimationType}
            onClose={onClose('email')}
          />
        )}
        {openedWindows.includes('catibor') && (
          <CatiborWindow
            layer={getLayer('catibor')}
            onClose={onClose('catibor')}
            onFocus={onOpen('catibor')}
            type={animationType}
          />
        )}
        {openedWindows.includes('statistic') && (
          <StatisticsWindow
            layer={getLayer('statistic')}
            onFocus={onOpen('statistic')}
            onClose={onClose('statistic')}
            updateFlag={animationType}
          />
        )}
        {openedWindows.includes('help') && (
          <HelpWindow
            layer={getLayer('help')}
            onFocus={onOpen('help')}
            onClose={onClose('help')}
          />
        )}
      </div>
      <div className='absolute flex bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-2 border-b-0 z-20 bg-surface-50 rounded-[63%_2%_38%_0%_/_2%_100%_0%_3%]'>
        <Tooltip text='Catibor'>
          <button onClick={onOpen('catibor')} className='w-40 h-40 hover:text-primary-500'>
            C
          </button>
        </Tooltip>
        <Tooltip text='Email'>
          <button onClick={onOpen('email')} className='w-40 h-40 hover:text-primary-500 border-l-2 border-surface-900'>
            E
          </button>
        </Tooltip>
        <Tooltip text='Stats'>
          <button onClick={onOpen('statistic')} className='w-40 h-40 hover:text-primary-500 border-l-2 border-surface-900'>
            S
          </button>
        </Tooltip>
        <Tooltip text='Help'>
          <button onClick={onOpen('help')} className='w-40 h-40 hover:text-primary-500 border-l-2 border-surface-900'>
            H
          </button>
        </Tooltip>
      </div>
    </>
  )
}

export default Home
