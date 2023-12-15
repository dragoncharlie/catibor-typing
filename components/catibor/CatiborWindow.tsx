import React, {useEffect, useState} from 'react';
import Image from 'next/image'
import Window from "@/components/Window";
import CatiborTyping from "@/components/catibor/CatiborTyping";

type CatiborAnimationProps = {
  type: string
  onFocus: () => void
  onClose: () => void
  layer: string
}

const imageClassName = 'absolute bottom-0 right-0 max-h-full object-right-bottom object-contain'

const CatiborWindow = ({type, onFocus, onClose, layer}: CatiborAnimationProps) => {
  const [boop, setBoop] = useState<NodeJS.Timeout | null>(null)
  const [closeCount, setCloseCount] = useState(0)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

  const clickBoop = () => {
    const id = setTimeout(() => {
      setBoop(null)
    }, 1000)
    setBoop(id)
  }

  useEffect(() => {
    if (type === 'typing') {
      setCloseCount(0)
    }
  }, [type]);


  const onTryClose = () => {
    if (closed) {
      onClose()
    } else if (closeCount < 3) {
      onFocus()
      setCloseCount(closeCount + 1)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      const id = setTimeout(() => {
        setCloseCount(0)
      }, 10000)
      setTimeoutId(id)
    } else if (closeCount === 3) {
      setCloseCount(closeCount + 1)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      window.localStorage.setItem('...', '...')
      setTimeout(() => {
        onClose()
      }, 1000)
    }
  }

  const closed = window.localStorage.getItem('...')

  return (
    <Window
      className={`absolute bottom-0 right-0 max-w-[740px] w-[calc(100%_-_72px)] max-h-[calc(100vh_-_56px_-_56px_-_32px)] ${layer}`}
      title={(<>catibor.exe {!closed && type === 'finish' && <span className='ml-4'>(not working)</span>}</>)}
      onClose={onTryClose}
      onFocus={onFocus}>
      <div className='grow relative'>
        <div className='pointer-events-none z-0 relative flex justify-end items-end select-none'>
          {/* desk */}
          <Image
            className='max-h-full object-right-bottom object-contain'
            src='/typing-animation/table.png'
            alt=''
            width={736}
            height={496}
          />
          {!closed && (
            <>
              {/* finish */}
              <Image
                className={`${imageClassName} ${closeCount || type !== 'finish' ? 'opacity-0' : 'opacity-100'}`}
                src='/typing-animation/sleep.png'
                alt=''
                width={736}
                height={496}/>
              {/* default + typing */}
              <CatiborTyping type={closeCount ? '' : type}/>
              {/* closing */}

              <Image
                className={`${imageClassName} ${closeCount !== 1 ? 'opacity-0' : 'opacity-100'}`}
                src='/typing-animation/shocked.png'
                alt=''
                width={736}
                height={496}/>
              <Image
                className={`${imageClassName} ${closeCount !== 2 ? 'opacity-0' : 'opacity-100'}`}
                src='/typing-animation/shocked.png'
                alt=''
                width={736}
                height={496}/>
              <Image
                className={`${imageClassName} ${closeCount !== 3 && closeCount !== 4 ? 'opacity-0' : 'opacity-100'}`}
                src='/typing-animation/angry.png'
                alt=''
                width={736}
                height={496}/>
            </>
          )}
        </div>
        {!closed && (['default', 'typing'].includes(type)) && (
          <button
            onClick={clickBoop}
            className='absolute right-[26%] top-[40%] -translate-y-1/2 translate-x-1/2 h-24 w-24 opacity-0 bg-error-500'
          />
        )}
        <div
          className='absolute top-[20%] md:top-1/3 left-32 md:left-128 right-1/2 flex justify-center md:-translate-y-1/2'>
          {!closed && (!!boop || !!closeCount) && (
            <div className='border-2 p-16 whitespace-pre-line bg-surface-50 rounded-[38%_34%_20%_3%_/_5%_3%_4%_32%] '>
              {!!boop && 'Boop!'}
              {closeCount === 1 && 'You clicked it by accident,\n aren\'t you?'}
              {closeCount === 2 && 'Why are you trying to get rid of me?\n You don\'t like me?'}
              {closeCount === 3 && 'Are you sure?'}
              {closeCount === 4 && 'Ok...'}
            </div>
          )}
        </div>
      </div>
    </Window>
  )
}

export default CatiborWindow