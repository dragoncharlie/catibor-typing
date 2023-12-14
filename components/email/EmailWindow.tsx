import React, {useState} from 'react';
import EmailStart from "@/components/email/EmailStart";
import EmailGame from "@/components/email/EmailGame";
import Window from "@/components/Window";

type EmailWindowProps = {
  onFocus: () => void
  onClose: () => void
  setAnimationType: (type: string) => void
}

const EmailWindow = ({onFocus, setAnimationType, onClose}: EmailWindowProps) => {
  const [isStarted, setIsStarted] = useState(false)
  const stopGame = () => {
    setIsStarted(false)
    onClose()
  }

  return (
    <Window
      className='w-full h-full relative max-h-screen'
      title='mail.exe'
      onClose={stopGame}
      onFocus={onFocus}>
      <div className='border-b-2 w-full top-0 left-0 text-12 px-16 py-2'>
        <p><span className='text-surface-800'>To:</span> important@client.com</p>
        <p><span className='text-surface-800'>From:</span> catibor@aspirity.com</p>
      </div>
      {!isStarted && <EmailStart onStart={() => setIsStarted(true)}/>}
      {isStarted && <EmailGame setAnimationType={setAnimationType}/>}
    </Window>
  )
}

export default EmailWindow