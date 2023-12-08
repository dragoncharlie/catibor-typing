'use client'

import {useState} from 'react';
import CatiborAnimation from '@/components/catibor-animation/CatiborAnimation';
import EmailWrap from '@/components/email/EmailWrap';
import EmailStart from '@/components/email/EmailStart';
import EmailGame from '@/components/email/EmailGame';

const Home = () => {
  const [isStarted, setIsStarted] = useState(false)
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='flex flex-col grow max-w-[960px] mx-auto w-full'>
      <div className='flex relative grow'>
        <div className='w-1/2 z-10'>
          <EmailWrap>
            {!isStarted && <EmailStart onStart={() => setIsStarted(true)} />}
            {isStarted && <EmailGame setIsActive={setIsActive} />}
          </EmailWrap>
        </div>
        <CatiborAnimation className='pointer-events-none z-0 absolute bottom-0 right-0 translate-x-32 translate-y-16 w-4/5 max-h-full flex' active={isActive}/>
      </div>
    </div>
  )
}

export default Home
