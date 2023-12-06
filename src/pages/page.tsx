import CatiborAnimation from "@/_components/catibor-animation/CatiborAnimation.tsx";
import {useState} from "react";
import EmailWrap from "@/_components/email/EmailWrap.tsx";
import EmailStart from "@/_components/email/EmailStart.tsx";
import EmailGame from "@/_components/email/EmailGame.tsx";

export default function Home() {
	const [isStarted, setIsStarted] = useState(false)
	const [isActive, setIsActive] = useState(false)

  return (
    <div className='flex flex-col grow'>
      <div className='flex relative grow'>
				<div className='w-1/2 z-10'>
					<EmailWrap>
						{!isStarted && <EmailStart onStart={() => setIsStarted(true)} />}
						{isStarted && <EmailGame setIsActive={setIsActive} />}
					</EmailWrap>
        </div>
        <div className='w-1/2 flex flex-col pointer-events-none z-0'>
          <CatiborAnimation className='absolute bottom-0 right-0 translate-x-32 translate-y-16 w-4/5 max-h-full flex' active={isActive}/>
        </div>
      </div>
    </div>
  )
}
