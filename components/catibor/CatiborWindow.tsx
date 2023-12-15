import React from 'react';
import Image from 'next/image'
import Window from "@/components/Window";
import CatiborTyping from "@/components/catibor/CatiborTyping";

type CatiborAnimationProps = {
  type: string
  onFocus: () => void
  layer: string
}

const imageClassName = 'absolute bottom-0 right-0 max-h-full object-right-bottom object-contain'

const CatiborWindow = ({type, onFocus, layer}: CatiborAnimationProps) => {
  const isFinish = type === 'finish'

  return (
    <Window
      className={`absolute bottom-0 right-0 max-w-[740px] w-[calc(100%_-_72px)] max-h-[calc(100vh_-_56px_-_56px_-_32px)] ${layer}`}
      title={(<>catibor.exe {isFinish && <span className='ml-4'>(not working)</span>}</>)}
      onClose={() => {
      }}
      onFocus={onFocus}>
      <div className='pointer-events-none z-0 max-h-full grow relative flex justify-end items-end select-none'>
        {/* desk */}
        <Image
          className='max-h-full object-right-bottom object-contain'
          src='/typing-animation/table.png'
          alt=''
          width={736}
          height={496}/>
        {/* finish */}
        <Image
          className={`${imageClassName} ${!isFinish ? 'opacity-0' : 'opacity-100'}`}
          src='/typing-animation/sleep.png'
          alt=''
          width={736}
          height={496}/>
        {/* default + typing */}
        <CatiborTyping type={type} />
      </div>
      <div
        className='absolute top-1/4 md:top-1/3 left-32 md:left-128 right-1/2 flex justify-center md:-translate-y-1/2'>
        {/*<div className='border-2 p-16 whitespace-pre-line bg-surface-50 rounded-[38%_34%_20%_3%_/_5%_3%_4%_32%] '>*/}
        {/*  {'You clicked it by accident,\n aren\'t you?'}*/}
        {/*{'Why are you trying to get rid of me?\n You don\'t like me?'}*/}
        {/*{'Are you sure?'}*/}
        {/*</div>*/}
      </div>
    </Window>
  )
}

export default CatiborWindow