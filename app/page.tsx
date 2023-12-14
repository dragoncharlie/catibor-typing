'use client'

import React, {useState} from 'react';
import CatiborWindow from '@/components/catibor-animation/CatiborWindow';
import EmailWindow from '@/components/email/EmailWindow';
import StatisticsWindow from "@/components/statistic/StatisticsWindow";

type windowsType = 'email' | 'catibor' | 'statistic'

const Home = () => {
  const [animationType, setAnimationType] = useState('default')
  const [openedWindows, setOpenedWindows] = useState<windowsType[]>(['email', 'catibor'])

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

      default:
        return 'z-0'
    }
  }

  return (
    <>
      <div className='flex flex-col grow m-auto w-full max-h-[720px] relative'>
        <div className='flex flex-col relative grow max-h-[calc(100vh_-_56px_-_56px)] min-h-[340px]'>
          {openedWindows.includes('email') && (
            <div
              className={`max-w-[520px] w-3/5 lg:w-1/2 ${getLayer('email')} h-[calc(60vh)] lg:h-[calc(100vh_-_56px_-_56px_-_32px)] lg:pb-32`}
            >
              <EmailWindow
                onFocus={onOpen('email')}
                setAnimationType={setAnimationType}
                onClose={onClose('email')}
              />
            </div>
          )}
          {openedWindows.includes('catibor') && (
            <CatiborWindow
              layer={getLayer('catibor')}
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
        </div>
      </div>
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 border-2 border-b-0 z-20 bg-surface-50 rounded-[63%_2%_38%_0%_/_2%_100%_0%_3%]'>
        <button onClick={onOpen('email')} className='w-48 h-48 hover:text-primary-500'>
          E
        </button>
        <button onClick={onOpen('statistic')} className='w-48 h-48 hover:text-primary-500 border-l-2 border-surface-900'>
          S
        </button>
        <button onClick={onOpen('catibor')} className='w-48 h-48 hover:text-primary-500 border-l-2 border-surface-900'>
          C
        </button>
      </div>
    </>
  )
}

export default Home
