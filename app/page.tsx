'use client'

import React, {useState} from 'react';
import CatiborAnimation from '@/components/catibor-animation/CatiborAnimation';
import EmailWrap from '@/components/email/EmailWrap';
import EmailStart from '@/components/email/EmailStart';
import EmailGame from '@/components/email/EmailGame';

const Home = () => {
  const [isStarted, setIsStarted] = useState(false)
  const [animationType, setAnimationType] = useState('default')

  const stopGame = () => {
    setIsStarted(false)
  }

  return (
    <div className='flex flex-col grow m-auto w-full max-h-[720px]'>
      <div className='flex flex-col relative grow max-h-[calc(100vh_-_56px_-_56px)] min-h-[340px]'>
        <div className='w-3/5 lg:w-1/2 z-10 h-[calc(60vh)] lg:h-[calc(100vh_-_56px_-_56px_-_64px)] lg:pb-64'>
          <EmailWrap>
            {!isStarted && <EmailStart onStart={() => setIsStarted(true)} />}
            {isStarted && <EmailGame setAnimationType={setAnimationType} stopGame={stopGame} />}
          </EmailWrap>
        </div>
          <CatiborAnimation type={animationType}/>
      </div>
    </div>
  )
}

export default Home
