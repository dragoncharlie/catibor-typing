'use client'

import React, {useState} from 'react';
import CatiborWindow from '@/components/catibor/CatiborWindow';
import EmailWindow from '@/components/email/EmailWindow';
import StatisticsWindow from "@/components/statistic/StatisticsWindow";
import HelpWindow from "@/components/help/HelpWindow";
import Menu, {windowsType} from "@/components/layout/Menu";

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

  const focusedWindow = openedWindows[openedWindows.length - 1]

  return (
    <>
      <div className='flex flex-col grow m-auto w-full max-h-[720px] relative mb-56'>
        {openedWindows.includes('email') && (
          <EmailWindow
            focused={focusedWindow === 'email'}
            layer={getLayer('email')}
            onFocus={onOpen('email')}
            setAnimationType={setAnimationType}
            onClose={onClose('email')}
          />
        )}
        {openedWindows.includes('catibor') && (
          <CatiborWindow
            focused={focusedWindow === 'catibor'}
            layer={getLayer('catibor')}
            onClose={onClose('catibor')}
            onFocus={onOpen('catibor')}
            type={animationType}
          />
        )}
        {openedWindows.includes('statistic') && (
          <StatisticsWindow
            focused={focusedWindow === 'statistic'}
            layer={getLayer('statistic')}
            onFocus={onOpen('statistic')}
            onClose={onClose('statistic')}
            updateFlag={animationType}
          />
        )}
        {openedWindows.includes('help') && (
          <HelpWindow
            focused={focusedWindow === 'help'}
            layer={getLayer('help')}
            onFocus={onOpen('help')}
            onClose={onClose('help')}
          />
        )}
      </div>
      <Menu onOpen={onOpen} />
    </>
  )
}

export default Home
